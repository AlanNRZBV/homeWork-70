export interface IContact {
  name:string,
  photoUrl:string,
  id: string
}

export interface IContactModal extends IContact {
  phone:string,
  email:string,
}


export interface IContactData {
  name:string,
  email:string,
  photoUrl:string,
  phone: string
  id?:string
}