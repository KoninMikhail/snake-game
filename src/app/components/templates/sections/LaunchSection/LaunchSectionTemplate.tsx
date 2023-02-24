import { LaunchSectionContainer } from '@templates/sections/LaunchSection/styles/StyledLaunchSection';
import { Launcher } from '@ui/molecules/information/Launcher/Launcher';
import { ILaunchSectionTemplate } from '@templates/sections/LaunchSection/LaunchSectionTemplate.interface';
import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { SmallScreen } from '@templates/devices/screen/size/SmallScreen';
import { MiddleScreen } from '@templates/devices/screen/size/MiddleScreen';
import { LargeScreen } from '@templates/devices/screen/size/LargeScreen';
import { useCustomNavigate } from '@hooks/useCustomRouter/useCustomNavigate';
import useAppDispatch from '@hooks/useAppDispatch/useAppDispatch';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceInfoSelector } from '@store/slices/app.slice';
import { delay } from '@utils/delay/delay';
import { PAGE_TRANSITION_DURATION } from '@constants/APP';
import { requestNewGame } from '@store/actions/requestNewGame';
import isLargeScreen from '@helpers/validators/isLargeScreen';
import useKeyPress from '@hooks/useKeyPress/useKeyPress';

export const LaunchSectionTemplate = ({
    image,
    message,
    keyboardKeysForLaunch,
    routeAfterLaunch,
}: ILaunchSectionTemplate) => {
    const navigate = useCustomNavigate();
    const dispatch = useAppDispatch();
    const device = useAppSelector(appDeviceInfoSelector);

    const launchGame = async () => {
        await delay(PAGE_TRANSITION_DURATION * 0.155);
        dispatch(requestNewGame);
        await delay(PAGE_TRANSITION_DURATION * 0.6); // delayBeforeChange for play sfx
        await navigate(routeAfterLaunch, { replace: true });
    };

    const handleKeyPress = () => launchGame();
    const handleDoubleClickLaunchSection = () => !isLargeScreen(device) && launchGame();

    useKeyPress(keyboardKeysForLaunch, handleKeyPress);

    return (
        <LaunchSectionContainer onDoubleClick={handleDoubleClickLaunchSection}>
            <Row>
                <Column align={'center'} justify={'center'}>
                    <SmallScreen>
                        <Launcher image={image} message={message} style={{ width: '100%' }} />
                    </SmallScreen>

                    <MiddleScreen>
                        <Launcher image={image} message={message} style={{ width: '80%' }} />
                    </MiddleScreen>

                    <LargeScreen>
                        <Launcher image={image} message={message} style={{ width: '36vw' }} />
                    </LargeScreen>
                </Column>
            </Row>
        </LaunchSectionContainer>
    );
};
