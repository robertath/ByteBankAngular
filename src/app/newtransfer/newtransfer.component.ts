import { Component, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-newtransfer',
  templateUrl: './newtransfer.component.html',
  styleUrls: ['./newtransfer.component.scss'],
})
export class NewTransferComponent
{
  @Output() inTransfer = new EventEmitter<any>();

  price: number;
  destiny: number;

  transferir() {
    console.log('Transfer requested.');

    const registerPrice = { price: this.price, destiny: this.destiny };
    this.inTransfer.emit(registerPrice);

    this.clearFields();
  }

  clearFields(){
    this.price = 0;
    this.destiny = 0;
  }
}
