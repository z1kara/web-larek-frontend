//интерфейс карточки товара
export interface IProduct{
 id:string;
 description:string;
 name:string;
 category:string;
 price:number|null;
 image:string;
}

// интерфейс страницы
export interface IPage{
  basket:number;
  catalog:HTMLElement[];
}

//интерфейс формы доставки 
export interface IPaymentForm{
  payment: string;
  address: string;
}

//интерфейс формы контактов покупателя
export interface IContactForm{
  email: string;
  phone: string;
}

// интерфейс глобального состояния приложения
export interface IAppState {
  catalog: IProduct[];
  preview: string | null;
  basket: IProduct[];
  order: IOrder | null;
}

//интерфейс заказа
export interface IOrder extends IPaymentForm,IContactForm{
  total: number;
  items: string[];
}

//интерфейс удачной покупки 
export interface ISuccessfulPurchase{
  id:string;
  total:number;
}

// интерфейс модального окна
export interface IModalUI {
  content: HTMLElement;
}

// интерфейс корзины
export interface IBasket{
  items: HTMLElement[];
  total: number;
}



