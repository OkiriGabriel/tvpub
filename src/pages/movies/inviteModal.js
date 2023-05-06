import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, TextInput } from '@mantine/core';
import Btn from '../../components/Button'

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