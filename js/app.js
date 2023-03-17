"use strick";

// SHOW / HIDE BLOCK
const buttonShowHide = document.querySelector(".show-hide__button");
const blockText = document.querySelector("#show-hide-text");

buttonShowHide.addEventListener("click", function () {
  if (blockText.classList.toggle("hide-block")) {
    buttonShowHide.textContent = "Open block";
    this.classList.remove('_active');
  } else {
    buttonShowHide.textContent = "Hide block";
    this.classList.add('_active');
  }

  // blockText.classList.toggle('hide-block');

  // if (blockText.classList.contains('hide-block')) {
  //   buttonShowHide.textContent = 'Open block';
  // } else {
  //   buttonShowHide.textContent = 'Hide block';
  // }
});

// ACCORDEON
const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');
// console.log(accordeonTitle);

accordeonTitle.forEach(function (item) {
  // item.addEventListener('click', function() {
  //   console.log(this);
  //   this.nextElementSibling.classList.toggle('hide-block');
  // });
  

  item.addEventListener("click", showContent);
});

function showContent() {
  this.classList.toggle('_active');
  this.nextElementSibling.classList.toggle("hide-block");
}

// TABS
const tabTitle = document.querySelectorAll("[data-tab]");
const tabContent = document.querySelectorAll("[data-tab-content]");
// console.log(tabTitle);
// console.log(tabContent);

tabTitle.forEach(function (item) {
  // console.log(item);
  item.addEventListener("click", function () {
    // this.dataset.tab

    tabTitle.forEach(function(item) {
      item.classList.remove('_active');
    })
    this.classList.add('_active');
    
    tabContent.forEach(function (item) {
      item.classList.add("hide-block");
    });
    
    const contentBox = document.querySelector("#" + this.dataset.tab);
    // console.log(contentBox);
    contentBox.classList.remove('hide-block');
  });
});


// MODALS

// MY code ==========================================================================
// const buttonModal1 = document.querySelector('[data-modal-button]');
// const windowModal1 = document.querySelector('[data-modal]');
// const windowModalClose = document.querySelector('[data-modal-close]');
// // console.log(buttonModal1);
// // console.log(windowModal1);

// buttonModal1.addEventListener('click', function() {
//   windowModal1.classList.remove('hide-block');
// });

// windowModalClose.addEventListener('click', function() {
//   windowModal1.classList.add('hide-block');
// });

// windowModal1.addEventListener('click', function() {
//   windowModal1.classList.add('hide-block');
// }); 

// One modal ==========================================================================
// const modalButton = document.querySelector('[data-modal-button]');
// const modalWindow = document.querySelector('[data-modal]');
// const modalButtonClose = document.querySelector('[data-modal-close]');

// modalButton.addEventListener('click', function() {
//   modalWindow.classList.remove('hide-block');
// });

// modalButtonClose.addEventListener('click', function(){
//   modalWindow.classList.add('hide-block');
// });

// modalWindow.addEventListener('click', function() {
//   this.classList.add('hide-block');
// });

// modalWindow.querySelector('.modal__box').addEventListener('click', function(event) {
//   // console.log(event);
//   event.stopPropagation(); // Остановка передачи события клика родителю
// });
// // console.log(modalBox);


// Two or more modals ==========================================================================
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalButtonsClose = document.querySelectorAll('[data-modal-close]');
const modalWindowClose = document.querySelectorAll('[data-modal]');
const documentBody = document.querySelector('body');

modalButtons.forEach(function(item) {
  item.addEventListener('click', function() {
    const modalId = this.dataset.modalButton;
    const modalWindow = document.querySelector('#' + modalId);
    documentBody.classList.add('_lock');
    modalWindow.classList.remove('hide-block');

    this.classList.add('_active');

    // Остановка передачи события клика родителю
    modalWindow.querySelector('.modal__box').addEventListener('click', function(e) {
      e.stopPropagation(); // отменить передачу события наверх
    });
  });
});

modalButtonsClose.forEach(function(item) {
  item.addEventListener('click', function() {
    this.closest('[data-modal]').classList.add('hide-block'); // поиск среди родителей по селектору

    removeActiveClass();
    removeBodyLock();
  });
});

modalWindowClose.forEach(function(item) {
  item.addEventListener('click', function() {
    this.classList.add('hide-block');
    
    removeActiveClass();
    removeBodyLock();
  });
});

function removeActiveClass() {
  modalButtons.forEach(function(item) {
    item.classList.remove('_active');
  });
};

function removeBodyLock() {
  documentBody.classList.remove('_lock');
};

