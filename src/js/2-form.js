const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
};
refs.form.style.margin = '30px auto';
refs.form.style.fontFamily = "'Montserrat', sans-serif";
refs.form.style.padding = '24px';
refs.form.style.borderRadius = '8px';
refs.form.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
refs.form.style.width = '408px';

const input = document.querySelectorAll('.feedback-form input');
input.forEach(item => {
  item.style.width = '360px';
  item.style.padding = '10px';
  item.style.fontSize = '16px';
  item.style.border = '1px solid';
  item.style.borderRadius = '4px';
  item.style.margin = '8px 0';
});
const textarea = document.querySelectorAll('.feedback-form textarea');
textarea.forEach(item => {
  item.style.width = '360px';
  item.style.height = '80px';
  item.style.padding = '10px';
  item.style.margin = '8px 0 16px';
  item.style.border = '1px solid';
  item.style.borderRadius = '4px';
  item.style.fontSize = '16px';
});
const button = document.querySelector('.feedback-form button');
button.style.width = '95px';
button.style.height = '40px';
button.style.padding = '8px 16px';
button.style.backgroundColor = '#4E75FF';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.fontSize = '16px';

refs.form.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();
  formData.email = email;
  formData.message = message;
  saveToLS(STORAGE_KEY, formData);
});

function initPage() {
  const localData = loadFromLS(STORAGE_KEY);

  refs.form.elements.email.value = localData.email || '';
  refs.form.elements.message.value = localData.message || '';
}
initPage();

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  formData.email = email;
  formData.message = message;
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});
