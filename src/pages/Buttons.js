import Button from '../components/Button';
import { AiTwotoneCar } from 'react-icons/ai';
import { AiFillTablet } from 'react-icons/ai';

function Buttons() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button classes="mb-2" primary rounded>
          Primary
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <AiFillTablet />
          Secondary
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          Success
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <AiTwotoneCar />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}

export default Buttons;
