import styled from "styled-components";
import { motion } from "framer-motion";

// import component
import { Button } from "../../components";
// import variants
import { backdropVariants, containerVariants } from "./Variants";

function AddToCartMessage({
  message,
  setShowSuccessMessage,
}: {
  message: string;
  setShowSuccessMessage: React.Dispatch<React.SetStateAction<string | boolean>>;
}) {
  //
  const closeModal = () => {
    setShowSuccessMessage(false);
  };

  return (
    <Backdrop
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container variants={containerVariants}>
        <SuccessMsg>{message}</SuccessMsg>
        <Button
          title="ok"
          backgroundColor="var(--primary-orange)"
          border="none"
          color="var(--white)"
          hoverColor="var(--secondary-orange)"
          handleAddToCart={closeModal}
        />
      </Container>
    </Backdrop>
  );
}

export default AddToCartMessage;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  max-width: 1440px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(motion.div)`
  max-width: 350px;
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  padding-bottom: 30px;
  border-radius: 8px;
`;

const SuccessMsg = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 1.42857px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 20px;
`;
