import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false)
  //here we change visible of window (true when we can see it, false you cant see)

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
  }
}
