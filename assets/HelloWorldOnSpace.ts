import { _decorator, Component, systemEvent, SystemEvent, KeyCode } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HelloWorldOnSpace') export class HelloWorldOnSpace extends Component {

onLoad() {
    // Nasłuchiwanie naciśnięcia klawisza
    systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
}

onDestroy() {
    // Usunięcie nasłuchiwania
    systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
}

onKeyDown(event) {
    if (event.keyCode === KeyCode.SPACE) {
        console.log("HelloWorld");
    }
}
}