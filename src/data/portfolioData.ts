import type { PersonalInfo, Skill, Certification, Project, SideProject } from '../types';
import profileImg from '../assets/profile_img.jpg';
import wakestrideOverview from '../assets/wakestride/overview.png';
import wakestrideMatrix from '../assets/wakestride/matrix.png';
import wakestrideCalendar from '../assets/wakestride/calendar.png';
import wakestrideWbs from '../assets/wakestride/wbs.png';
import wakestrideDashboard from '../assets/wakestride/dashboard.png';
import wakestrideWidget from '../assets/wakestride/widget.png';
import wakestrideIcon from '../assets/wakestride/app-icon.png';

export const personalInfo: PersonalInfo = {
    name: '윤승환',
    position: 'Web Developer',
    birthDate: '1988.10.08',
    address: '경기도 고양시 대화동',
    phone: '010-8236-0877',
    email: 'rainyrooftopcoder@gmail.com',
    backgroundImage: profileImg,
};

export const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', level: 85, color: '#F7DF1E', category: 'frontend' },
    { name: 'TypeScript', level: 70, color: '#3178C6', category: 'frontend' },
    { name: 'React', level: 65, color: '#61DAFB', category: 'frontend' },
    { name: 'jQuery', level: 90, color: '#0769AD', category: 'frontend' },
    { name: 'Ajax', level: 85, color: '#0088CC', category: 'frontend' },
    { name: 'JSP', level: 85, color: '#E76F00', category: 'frontend' },
    { name: 'JSTL', level: 85, color: '#E76F00', category: 'frontend' },
    { name: 'Bootstrap', level: 80, color: '#7952B3', category: 'frontend' },

    // Backend
    { name: 'Java', level: 90, color: '#007396', category: 'backend' },
    { name: 'Spring Framework', level: 85, color: '#6DB33F', category: 'backend' },
    { name: 'Spring Boot', level: 80, color: '#6DB33F', category: 'backend' },
    { name: '전자정부프레임워크', level: 85, color: '#003876', category: 'backend' },
    { name: 'MyBatis', level: 90, color: '#000000', category: 'backend' },
    { name: 'iBATIS', level: 80, color: '#000000', category: 'backend' },

    // Database
    { name: 'Oracle', level: 85, color: '#F80000', category: 'database' },
    { name: 'MySQL', level: 80, color: '#4479A1', category: 'database' },
    { name: 'MariaDB', level: 85, color: '#003545', category: 'database' },
    { name: 'Tibero', level: 85, color: '#003545', category: 'database' },
    { name: 'Cubrid', level: 85, color: '#003545', category: 'database' },
    { name: 'PL/SQL', level: 80, color: '#F80000', category: 'database' },

    // DevOps
    { name: 'Linux', level: 75, color: '#FCC624', category: 'devops' },
    { name: 'Tomcat', level: 85, color: '#F8DC75', category: 'devops' },
    { name: 'SVN', level: 80, color: '#809CC9', category: 'devops' },
    { name: 'Git', level: 75, color: '#F05032', category: 'devops' },

    // Tools
    { name: 'Eclipse', level: 90, color: '#2C2255', category: 'tools' },
    { name: 'IntelliJ IDEA', level: 85, color: '#000000', category: 'tools' },
    { name: 'Orange', level: 85, color: '#FF6C37', category: 'tools' },
    { name: 'DBeaver', level: 85, color: '#382923', category: 'tools' },
];

export const certifications: Certification[] = [
    {
        name: '新 JLPT N3급',
        issuer: '일본국제교육협회',
        date: '2025.08',
    },
    {
        name: '리눅스마스터 2급',
        issuer: '한국정보통신진흥협회',
        date: '2024.03',
    },
    {
        name: '정보처리산업기사',
        issuer: '한국산업인력공단',
        date: '2023.09',
    },
    {
        name: 'SQL 개발자',
        issuer: '한국데이터산업진흥원',
        date: '2022.10',
    },
];

export const projects: Project[] = [
    {
        id: 'project-1',
        title: '경찰청 통합유지관리',
        period: '2025.11 - 진행중',
        description: '경찰청 시스템 DBMS 유지관리 및 개발DB 서버 구성',
        role: 'DBA',
        techStack: ['Oracle', 'MariaDB', 'Tibero', 'MySql', 'Cubrid', 'Orange', 'DBeaver'],
        links: {},
        teamSize: 2,
    },
    {
        id: 'project-2',
        title: '법인시설관리시스템 운영 유지관리 및 기능 고도화',
        period: '2025.05 - 2025.09',
        description:
            '서울시청 법인시설관리시스템의 안정적 운영과 기능 고도화를 담당한 프로젝트입니다. 좋은돌봄인증 업무 프로세스의 전체 흐름을 분석하고, 사용자 친화적인 인터페이스를 설계하여 업무 효율성을 높였습니다.',
        role: 'Full-stack Developer',
        techStack: [
            'Java',
            'Spring Framework',
            'iBATIS',
            'JSP',
            'JSTL',
            'jQuery',
            'Oracle',
            'JEUS8',
            'Eclipse',
            'DBeaver',
        ],
        links: {
            demo: 'https://swfss.eseoul.go.kr/',
        },
        teamSize: 5,
    },
    {
        id: 'project-3',
        title: '바닥충격음 임시홈페이지 구축',
        period: '2024.05 - 2025.03',
        description:
            '국토안전관리원 바닥충격음 관리를 위한 웹 플랫폼을 처음부터 설계하고 구축한 프로젝트입니다. 고객 요구사항을 면밀히 분석하여 직관적인 UI/UX를 설계했으며, 재사용 가능한 공통 컴포넌트를 개발하여 개발 생산성을 향상시켰습니다. localStorage와 SessionStorage를 활용한 클라이언트 측 캐싱으로 서버 부하를 최소화하고 사용자 경험을 개선했습니다.',
        role: 'Full-stack Developer / Technical Lead',
        techStack: [
            'Java',
            'Spring Boot',
            'MyBatis',
            'JSP',
            'JSTL',
            'jQuery',
            'MariaDB',
            'Tomcat',
            'Rocky Linux',
            'Eclipse',
            'DBeaver',
            'Crownix Report',
        ],
        links: {
            demo: 'https://sound.kalis.or.kr/',
        },
        teamSize: 4,
    },
    {
        id: 'project-4',
        title: '3종 모바일 시스템 기능개선',
        period: '2024.07 - 2025.03',
        description:
            '국토안전관리원 3종 모바일 시스템의 사용성 개선 프로젝트입니다. 모바일 환경에서 보고서 파일을 원활하게 업로드하고 관리할 수 있도록 파일 제출 기능을 새롭게 설계하고 구현했습니다.',
        role: 'Backend Developer',
        techStack: [
            'Java',
            'Spring Framework',
            'MyBatis',
            'JSP',
            'JSTL',
            'jQuery',
            'MariaDB',
            'Tomcat',
            'Rocky Linux',
            'Eclipse',
            'DBeaver',
            'Crownix Report',
        ],
        links: {
            demo: 'https://3rd.kalis.or.kr/',
        },
        teamSize: 3,
    },
    {
        id: 'project-5',
        title: '소규모취약시설 안전관리 시스템 기능개선',
        period: '2023.10 - 2024.12',
        description:
            '국토안전관리원 소규모취약시설 안전관리 시스템의 대규모 데이터베이스 마이그레이션과 기능 개선을 수행한 프로젝트입니다. Oracle에서 MariaDB로의 완벽한 마이그레이션을 주도했으며, 마이그레이션 과정에서 발생한 성능 이슈를 분석하여 표준 SQL로 최적화함으로써 쿼리 성능을 크게 개선했습니다. 또한, 보안 강화를 위한 로그인 기능 리팩토링을 진행했습니다.',
        role: 'Database Engineer / Backend Developer',
        techStack: [
            'Java',
            'Spring Framework',
            'MyBatis',
            'JSP',
            'JSTL',
            'jQuery',
            'Oracle',
            'MariaDB',
            'Tomcat',
            'CentOS',
            'Eclipse',
            'DBeaver',
            'Crownix Report',
        ],
        links: {
            demo: 'https://www.sfms.or.kr/',
        },
        teamSize: 4,
    },
    {
        id: 'project-6',
        title: '정보시스템 유지관리',
        period: '2022.05 - 2024.02',
        description:
            '국토안전관리원의 핵심 정보시스템 3종(시설물통합정보관리시스템, 부동산종합관리시스템, 소규모취약시설 안전관리시스템)에 대한 장기 유지보수 프로젝트입니다. 약 2년간 4,500여 건의 장애처리, 기능개선, 신규개발 요청을 처리하며 시스템 안정성을 유지했습니다. 다양한 이해관계자와의 원활한 소통을 통해 우선순위를 조율하고, 신속한 문제 해결로 고객 만족도를 극대화했습니다.',
        role: 'System Maintenance Engineer',
        techStack: [
            'Java',
            'Spring Framework',
            'MyBatis',
            'JSP',
            'JSTL',
            'jQuery',
            'Oracle',
            'MariaDB',
            'Tomcat',
            'CentOS',
            'Eclipse',
            'Orange',
            'DBeaver',
            'Crownix Report',
        ],
        links: {
            demo: 'https://www.fms.or.kr/',
            demo2: 'https://irems.kalis.or.kr/',
            demo3: 'https://www.sfms.or.kr/',
        },
        teamSize: 6,
    },
];

export const sideProjects: SideProject[] = [
    {
        id: 'wakestride',
        title: 'WakeStride',
        description:
            '중요한 일과 급한 일을 아이젠하워 매트릭스로 가려내고, 캘린더·노트·프로젝트 보드가 하나로 이어지는 개인 생산성 앱. Windows/macOS 데스크톱과 Android에서 같은 데이터로 동작합니다.',
        techStack: ['React', 'TypeScript', 'Tauri', 'Rust', 'Mantine'],
        image: wakestrideIcon,
        slides: [
            {
                image: wakestrideOverview,
                title: '개요',
                description:
                    '일의 순서를 다시 정의하는 개인 생산성 앱. 중요한 일과 급한 일을 가려내고, 캘린더와 노트가 그 흐름을 그대로 이어갑니다. Windows/macOS 데스크톱, Android 지원(iOS 준비중).',
            },
            {
                image: wakestrideMatrix,
                title: '아이젠하워 매트릭스',
                description: '중요도와 긴급도, 두 가지 기준으로 할 일을 네 영역에 자동으로 분류해 지금 해야 할 일을 선명하게 보여줍니다.',
            },
            {
                image: wakestrideCalendar,
                title: '캘린더',
                description: '월간 그리드와 하루 일정을 한 화면에서 확인하고, 좌우로 넘겨 다음 달로 이동할 수 있습니다.',
            },
            {
                image: wakestrideWbs,
                title: '프로젝트 보드',
                description: '노트 폴더가 그룹이 되고, 그룹 아래 일정, 일정 아래 할일로 이어지는 구조를 간트 차트로 시각화합니다.',
            },
            {
                image: wakestrideDashboard,
                title: '통계 대시보드',
                description: '그룹별 진행률과 기한 준수율, 최근 사용량까지 숫자로 확인할 수 있는 통계 화면.',
            },
            {
                image: wakestrideWidget,
                title: '데스크톱 위젯',
                description: '캘린더와 매트릭스를 바탕화면 위젯으로 띄워두고, 앱을 열지 않아도 오늘 할 일을 바로 확인합니다.',
            },
        ],
        links: {
            demo: 'https://rainyrooftopcoder.github.io/wakestride-Introduction/index.html',
        },
        type: 'personal',
    },
    {
        id: 'side-1',
        title: '포트폴리오 빌더',
        description:
            '개발자들을 위한 간단한 포트폴리오 생성 도구. 템플릿을 선택하고 정보를 입력하면 자동으로 포트폴리오 사이트를 생성합니다.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],
        links: {
            github: 'https://github.com/example/portfolio-builder',
            demo: 'https://portfolio-builder.vercel.app',
        },
        type: 'personal',
    },
    {
        id: 'side-2',
        title: '날씨 알림 서비스',
        description:
            '사용자 위치 기반 날씨 정보와 알림을 제공하는 웹 애플리케이션. Open Weather API를 활용하여 실시간 날씨 정보 제공.',
        techStack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
        links: {
            github: 'https://github.com/example/weather-app',
            demo: 'https://weather-notifier.netlify.app',
        },
        type: 'personal',
    },
    {
        id: 'side-3',
        title: '코드 스니펫 공유 플랫폼',
        description: '개발자들이 유용한 코드 스니펫을 공유하고 검색할 수 있는 플랫폼. 팀 프로젝트로 진행.',
        techStack: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
        links: {
            github: 'https://github.com/example/code-snippet',
            demo: 'https://snippet-share.web.app',
        },
        type: 'team',
    },
    {
        id: 'side-4',
        title: 'TODO 관리 앱',
        description: '드래그 앤 드롭 기능이 있는 직관적인 TODO 관리 애플리케이션. 로컬 스토리지를 활용한 데이터 저장.',
        techStack: ['React', 'TypeScript', 'Framer Motion'],
        links: {
            github: 'https://github.com/example/todo-app',
            demo: 'https://todo-manager.vercel.app',
        },
        type: 'personal',
    },
];
