import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { Copyright } from '@ui/molecules/information/Copyright/Copyright';
import { GitHubLink } from '@ui/molecules/navigation/GithubLink/GitHubLink';
import { IFooter } from '@templates/footers/Footer/FooterTemplate.interface';

export const FooterSingleColumnTemplate = ({ github, copyright }: IFooter) => (
    <Row columns={1} gap={'md'} style={{ textAlign: 'center' }}>
        <Column align={'center'} justify={'center'}>
            <Copyright {...copyright} />
        </Column>
        <Column align={'center'} justify={'center'}>
            <GitHubLink {...github} />
        </Column>
    </Row>
);
