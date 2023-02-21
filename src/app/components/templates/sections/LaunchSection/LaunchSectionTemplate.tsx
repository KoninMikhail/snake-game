import { LaunchSectionContainer } from '@templates/sections/LaunchSection/styles/StyledLaunchSection';
import { Launcher } from '@ui/molecules/information/Launcher/Launcher';
import { ILaunchSectionTemplate } from '@templates/sections/LaunchSection/LaunchSectionTemplate.interface';
import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { MobileScreen } from '@templates/devices/screen/MobileScreen';
import { TabletScreen } from '@templates/devices/screen/TabletScreen';
import { DesktopScreen } from '@templates/devices/screen/DesktopScreen';
import { useCustomNavigate } from '@hooks/useCustomRouter/useCustomNavigate';
import useAppDispatch from '@hooks/useAppDispatch/useAppDispatch';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceInfoSelector } from '@store/slices/app.slice';
import { delay } from '@utils/delay/delay';
import { PAGE_TRANSITION_DURATION } from '@constants/APP';
import { requestNewGame } from '@store/actions/requestNewGame';
import isDesktop from '@/helpers/validators/isDesktop';
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
    const handleDoubleClickLaunchSection = () => !isDesktop(device) && launchGame();

    useKeyPress(keyboardKeysForLaunch, handleKeyPress);

    return (
        <LaunchSectionContainer onDoubleClick={handleDoubleClickLaunchSection}>
            <Row>
                <Column align={'center'} justify={'center'}>
                    <MobileScreen>
                        <Launcher image={image} message={message} style={{ width: '100%' }} />
                    </MobileScreen>

                    <TabletScreen>
                        <Launcher image={image} message={message} style={{ width: '80%' }} />
                    </TabletScreen>

                    <DesktopScreen>
                        <Launcher image={image} message={message} style={{ width: '36vw' }} />
                    </DesktopScreen>
                </Column>
            </Row>
        </LaunchSectionContainer>
    );
};
