import { deleteData, getData, postData } from '../api';

export const addCategory = () => {
  const nameInp = document.getElementById('category-name');
  const previewInp = document.getElementById('category-image');
  const saveBtn = document.getElementById('category-add-btn');
  const container = document.getElementById('category-container');
  const select = document.getElementById('product-category');

  const categoryData = {
    name: '',
    preview: '',
  };

  const render = (data) => {
    container.textContent = '';

    data.forEach((item, index) => {
      container.insertAdjacentHTML(
        'beforeend',
        `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${item.name}</td>
          <td class="text-end">
            <button type="button" class="btn btn-outline-danger btn-sm" data-category="${
              item.id
            }">
              удалить
            </button>
          </td>
        </tr>
      `,
      );

      select.insertAdjacentHTML(
        'beforeend',
        `
        <option value="${item.id}">${item.name}</option>
      `,
      );
    });
  };

  const checkValues = () => {
    if (nameInp.value === '' || previewInp.value === '') {
      saveBtn.disabled = true;
    } else {
      saveBtn.disabled = false;
    }
  };

  const updateTable = () => {
    getData('/categories').then((data) => {
      render(data);
    });
  };

  nameInp.addEventListener('input', () => {
    categoryData.name = nameInp.value;
    checkValues();
  });

  previewInp.addEventListener('input', () => {
    const file = previewInp.files[0];

    if (
      file.type === 'image/png' ||
      file.type === 'image/jpg' ||
      file.type === 'image/jpeg'
    ) {
      const reader = new FileReader();

      reader.onload = () => {
        categoryData.preview = reader.result;
      };

      reader.onerror = () => {
        categoryData.preview = '';
        previewInp.value = '';
      };

      reader.readAsDataURL(file);
    } else {
      previewInp.value = '';
    }

    checkValues();
  });

  saveBtn.addEventListener('click', (e) => {
    postData('/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      nameInp.value = '';
      previewInp.value = '';
      updateTable();
    });
  });

  container.addEventListener('click', ({ target }) => {
    if (target.tagName === 'BUTTON') {
      const id = target.dataset.category;
      deleteData(`/categories/${id}`).then((data) => {
        updateTable();
      });
    }
  });

  updateTable();
  checkValues();
};
