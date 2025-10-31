import { v4 as uuid } from 'uuid';  
import { IEvent } from '@nestjs/cqrs'; 

export class AccountEvent implements IEvent {
  constructor(
    public readonly aggregateId: string, 
    public readonly paymentMechanismCount: string
  ) {}
}

export class AccountRegisteredEvent extends AccountEvent {}
export class AccountDisabledEvent extends AccountEvent {}
export class AccountEnabledEvent extends AccountEvent {}