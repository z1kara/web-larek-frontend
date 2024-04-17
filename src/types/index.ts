interface IProduct{
 id:string;
 description:string;
 name:string;
 category:string;
 price:number|null;
 image:string;
}

interface IPage{
  basket:number;
  catalog:HTMLElement[];
}

interface IPaymentForm{
  payment: string;
  address: string;
}

interface IContactForm{
  email: string;
  phone: string;
}

interface IOrder extends IPaymentForm,IContactForm{
  total: number;
  items: string[];
}

interface ISuccessfulPurchase{
  id:string;
  total:number;
}

interface IBasket{
  items: HTMLElement[];
  total: number;
}

interface IValidOrder extends IOrder{
  errormessage:string[];
}