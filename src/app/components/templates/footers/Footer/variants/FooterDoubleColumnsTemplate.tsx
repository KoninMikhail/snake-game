import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { Copyright } from '@ui/molecules/information/Copyright/Copyright';
import { GitHubLink } from '@ui/molecules/navigation/GithubLink/GitHubLink';
import { IFooter } from '@templates/footers/Footer/FooterTemplate.interface';

export const FooterDoubleColumnsTemplate = ({ github, copyright }: IFooter) => (
    <Row columns={2} gap={'md'}>
        <Column align={'center'} justify={'start'}>
            <Copyright {...copyright} />
        </Column>
        <Column align={'center'} justify={'end'}>
            <GitHubLink {...github} />
        </Column>
    </Row>
);
