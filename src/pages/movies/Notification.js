import { Popover, Text, Button } from '@mantine/core';

function Notification() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          <p>Notifications</p>
         <div className='d-flex'>
              <div>
                   <h6 className='fs-xsmall'>New video upload</h6>
                  <h6 className='fs-xxsmall fw-medium'>White wedding has been uploaded successfully </h6>
              </div>
              <div>
                  <img src='../images/Ellipse 21.png' />
              </div>
          </div>

          <div className='d-flex mt-2'>
              <div>
                   <h6 className='fs-xsmall'>New video upload</h6>
                  <h6 className='fs-xxsmall fw-medium'>White wedding has been uploaded successfully </h6>
              </div>
              <div>
                  <img src='../images/Ellipse 21.png' />
              </div>
          </div>

        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default Notification