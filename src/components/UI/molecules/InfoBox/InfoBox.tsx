import { TextAlign } from '../../atoms/body/TextAlign/TextAlign';
import { Text } from 'components/UI/atoms/body/Text/Text';
import { CustomImage } from '../../atoms/images/CustomImage';
import { StyledInfoBox } from './StyledInfoBox';
import { Grid } from '../../extend/Grid/Grid';
import { GridItem } from '../../extend/GridItem/GridItem';
import useDeviceTypeScreenCheck from '../../../../hooks/use-device-screen-breakpoints';

/**
 * @typedef  IInfoBoxProps
 *
 * @property {string} image - The image src
 * @property {string} content - The content
 */
interface IInfoBoxProps {
  image: string;
  content: string;
}

/**
 * InfoBox
 *
 * @description Use for information
 *
 * @param {IInfoBoxProps} props - component props
 * @return {JSX.Element}
 */
export const InfoBox = (props: IInfoBoxProps): JSX.Element => {
  const { isDesktop } = useDeviceTypeScreenCheck();

  return (
    <>
      <StyledInfoBox>
        <Grid columns={isDesktop ? '1fr' : 'max-content auto'} align="center" justify="center">
          <GridItem justify="center" align="center" style={{ width: isDesktop ? '60%' : '40px' }}>
            <CustomImage src={props.image} width={'100%'} />
          </GridItem>
          <GridItem>
            <TextAlign align={isDesktop ? 'center' : 'left'}>
              <Text as="span">{props.content}</Text>
            </TextAlign>
          </GridItem>
        </Grid>
      </StyledInfoBox>
    </>
  );
};
