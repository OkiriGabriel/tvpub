import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput } from '@mantine/core';

function InviteModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Invite Account" centered>
        <TextInput label="Email Address" placeholder="Tap to edit" />
        
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export default InviteModal