import { makeAutoObservable } from 'mobx';

class ModalStore {
    modalIsOpen = false;
    content = 'Создатели';
  
    constructor() {
      makeAutoObservable(this);
    }
  
    openModal() {
      this.modalIsOpen = true;
    }
  
    closeModal() {
      this.modalIsOpen = false;
    }
  
    showCreators() {
      this.content = 'Создатели';
    }
  
    showReviews() {
      this.content = 'Отзывы';
    }
  
    showTrailers() {
      this.content = 'Трейлеры';
    }
  }

export const modalStore = new ModalStore();