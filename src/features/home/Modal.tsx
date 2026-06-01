import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface IModalBase {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  form: ReactNode;
}
export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, form } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered aria-label="Để lại thông tin">
        <ModalOverlay />
        <ModalContent
          bg={"white"}
          height={{ lg: "480px", base: "480px" }}
          mx={10}
        >
          <ModalCloseButton />
          <ModalBody py={6}>{form}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
