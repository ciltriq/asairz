import { ICustomer } from "@/core/interface/models/Icustomer.js";
import { BaseRepository } from "./base.repository.js";
import CustomerModel from "@/models/customer.js";

export class CustomerRepository extends BaseRepository<ICustomer> {

  constructor() {
    super(CustomerModel);
  }

  async sample(): Promise<ICustomer[] | null> {
    return this.model.find();
  }

}