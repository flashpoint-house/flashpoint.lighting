import rot13 from './rot13';
import toastr from 'toastr';
import 'toastr/build/toastr.css'

toastr.options.timeOut = 3000;

const PHOTON_TOK = rot13("sp011132rqp402s44op6962633srqo054sp3osr4");
const DEVICE_ID = '39003c000851353531343431';

const Particle = {
  call(name, arg) {
    console.log('Sending lights command', name, 'with arg', arg);

    return fetch('https://api.particle.io/v1/devices/' + DEVICE_ID + '/' + name, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "access_token="+PHOTON_TOK+"&arg="+encodeURIComponent(arg),
    }).then(r => r.json())
  },

  setLights(mode, color, speed=100) {
    toastr.remove();
    toastr.info('Updating...', { timeOut: 0 });

    return Particle.call('setMode', mode)
      .then(() => Particle.call('setColor', color))
      .then(() => Particle.call('setSpeed', speed))
      .then(() => {
        toastr.remove();
        toastr.success('Success', { timeOut: 3000 });
      })
      .catch((err) => {
        console.error(err);
        toastr.remove();
        toastr.error('Failed', { timeOut: 3000 });
      })
  }
}

export default Particle;
