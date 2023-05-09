import { Popover, Text, Button } from '@mantine/core';

function InviteNotification() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
            <div className='d-flex account p-0'>
                <img src='../images/account-circle.png' className='account-img'/>
                <p className='mt-3 mx-2'>Lanre313@gmail.com</p>
            </div>
            <div className='d-flex account'>
                <img src='../images/invite-user.png' className='account-img'/>
                <p className='mt-3 mx-2'>Invite user</p>
            </div>
            <div className='d-flex account'>
                <img src='../images/logout.png' className='account-img'/>
                <p className='mt-3 mx-2'>Logout</p>
            </div>
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default InviteNotification