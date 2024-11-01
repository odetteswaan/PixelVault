import { Box, styled, Typography, Button } from '@mui/material';
import SuccessImage from '../../assets/SuccessImage.svg';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';

interface SuccessMessageProps {
  onClose: () => void;
}

const Container = styled(Box)({
  background: colors.body.white,
  border: `1px solid ${colors.body.white}`,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  padding: customTheme.whitespace.spacings[4],
  justifyContent: 'center',
  gap: customTheme.whitespace.spacings[12],
  alignItems: 'center',
  width: '500px',
  maxWidth: '100%',
  height: '400px',
});

const CloseButton = styled(Button)({
  position: 'absolute',
  top: 10,
  borderRadius: '6px',
  right: 10,
  color: colors.greys.darkgrey,
  minWidth: '0',
  lineHeight: '10px',
  padding: '5px',
  background: colors.greys.dustygrey,
  border: colors.greys.dustygrey,
});

const ImageContainer = styled(Box)({
  width: '180px',
  height: '180px',
});

const HeadingContainer = styled(Box)({
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  color: colors.headers.darkBlack,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[16],
  fontWeight: customTheme.typography.fontWeights.semiBold,
});

const SubHeading = styled(Typography)({
  color: colors.body.lightGrey,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  fontWeight: 400,
});

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <Container>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ImageContainer>
        <img src={SuccessImage} alt="success"></img>
      </ImageContainer>
      <HeadingContainer>
        <Heading variant="h4">Congratulations!</Heading>
        <SubHeading variant="h6">
          Password Reset successful You’ll be redirected to the login screen now
        </SubHeading>
      </HeadingContainer>
    </Container>
  );
};

export default SuccessMessage;
