import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Brain,
  Building2,
  Presentation,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const latestProgramPosters = [
  {
    id: 1,
    title: "구직자·재직자를 위한 “생성형 AI 활용” 실무 과정 교육생 모집",
    badge: "전액 무료 교육",
    date: "상시 모집",
    image: "/images/news/generative_ai_course.jpg",
    summary: "AI 기초부터 실무 활용까지, 온라인 무료 교육과 생성형 AI 이용권까지 제공됩니다.",
  },
  {
    id: 2,
    title: "한국폴리텍대학 로봇캠퍼스 2027학년도 신입생 모집",
    badge: "2027 신입생 모집",
    date: "2026.09 ~ 2027.01",
    image: "/images/news/polytech_robot_2027.png",
    summary: "로봇 전문 교육과 취업 연계, 실질적 비용 부담을 낮춘 특화 프로그램입니다.",
  },
];

const ProgramContent = ({
  title,
  features,
  target,
  schedule,
  tag,
}: {
  title: string;
  features: string[];
  target: string;
  schedule: string;
  tag: string;
}) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white rounded-lg border border-slate-200 p-8 lg:p-12 shadow-sm relative overflow-hidden group">
      <div className="mb-10">
        <span className="text-[#1e3a8a] font-bold tracking-widest text-xs uppercase mb-3 block">{tag}</span>
        <h2 className="text-3xl font-black text-slate-900 leading-tight">{title}</h2>
      </div>

      <div className="grid md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-7 lg:col-span-8 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
              핵심 제공 내역
            </h3>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981] shrink-0 mt-0.5" />
                  <span className="text-slate-600 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-5 lg:col-span-4 space-y-4">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded text-slate-800">
            <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2">교육 대상</h3>
            <p className="text-[16px] font-bold leading-relaxed">{target}</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded text-slate-800">
            <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2">교육 일정</h3>
            <p className="text-[16px] font-bold leading-relaxed">{schedule}</p>
          </div>

          <Link
            to="/apply"
            className="flex items-center justify-between w-full p-6 mt-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold rounded transition-colors shadow-sm"
          >
            <span className="text-lg">수강 신청하기</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function Programs() {
  const location = useLocation();

  const tabs = [
    { path: "/programs/youth", label: "청년 역량강화", icon: GraduationCap },
    { path: "/programs/ai-consulting", label: "AI 진로상담", icon: Brain },
    { path: "/programs/corporate", label: "기업 채용 컨설팅", icon: Building2 },
    { path: "/programs/special-lecture", label: "특강·위탁교육", icon: Presentation },
  ];

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">
            Consulting Programs
          </span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">프로그램 안내</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            개인과 기업의 비즈니스 목적에 맞춘 세분화된 프리미엄 컨설팅 프로그램을 확인하세요.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-12 relative z-20">
        {/* Tabs */}
        <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-center gap-2 mb-12 border-b border-slate-200 pb-2">
          {tabs.map((tab) => {
            const isActive = location.pathname.includes(tab.path);
            const Icon = tab.icon;
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-2 px-6 py-4 font-bold transition-all w-full sm:w-auto justify-center border-b-[3px] ${
                  isActive
                    ? "border-[#1e3a8a] text-[#1e3a8a] bg-slate-50/50"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-[#1e3a8a]" : "text-slate-400"}`} />
                {tab.label}
              </Link>
            );
          })}
        </div>

        <section className="mb-10">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-600 rounded-full" />
              최신 프로그램 포스터
            </h2>
            <span className="text-xs text-slate-400">최근 2건</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {latestProgramPosters.map((poster) => (
              <div
                key={poster.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-500/90 px-2.5 py-1 text-[10px] font-black text-white shadow-sm">
                      NEW
                    </span>
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-800 backdrop-blur-sm">
                      {poster.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow-sm backdrop-blur-sm">
                      <Sparkles className="h-3 w-3 text-cyan-600" />
                      상세 보기
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-medium text-slate-500">
                    <span>{poster.date}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">프로그램</span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 text-base font-black leading-snug text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {poster.title}
                  </h3>

                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 break-keep">{poster.summary}</p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-blue-600">
                    <span>모집 안내 보기</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Routes>
          <Route
            path="youth"
            element={
              <ProgramContent
                tag="For Individuals"
                title="청년 취업역량강화과정"
                features={[
                  "최신 산업 트렌드(AI, 빅데이터 등)를 반영한 실무형 프로젝트 중심 교육",
                  "대기업 및 유망 스타트업 현직자 멘토링 매칭",
                  "1:1 이력서/자소서 첨삭 및 실전 모의면접 집중 훈련",
                ]}
                target="취업을 준비하는 만 19세~34세 청년"
                schedule="상시 모집 (기수별 운영)"
              />
            }
          />
          <Route
            path="ai-consulting"
            element={
              <ProgramContent
                tag="For Individuals"
                title="AI 활용 진로상담 (Job Care형)"
                features={[
                  "워크넷 Job Care 시스템 기반의 빅데이터 직무 역량 분석",
                  "개인의 전공, 자격, 경력을 종합한 최적의 직업군 및 훈련 과정 추천",
                  "단발성 상담이 아닌 지속적인 커리어 패스 추적 관리",
                ]}
                target="진로 전환 및 이직을 희망하는 구직자"
                schedule="사전 예약제 (월~금)"
              />
            }
          />
          <Route
            path="corporate"
            element={
              <ProgramContent
                tag="For Business"
                title="기업 채용 컨설팅"
                features={[
                  "기업의 핵심 가치와 인재상에 부합하는 채용 프로세스 재설계",
                  "구조화 면접 문항 개발 및 면접관 역량 강화 교육",
                  "우수 수료생 다이렉트 매칭 및 사후 적응 지원",
                ]}
                target="채용 프로세스 고도화가 필요한 기업"
                schedule="기업별 맞춤 협의"
              />
            }
          />
          <Route
            path="special-lecture"
            element={
              <ProgramContent
                tag="For Organizations"
                title="특강 · 위탁교육"
                features={[
                  "대학, 공공기관 등 의뢰 기관의 니즈에 맞춘 특화 커리큘럼 설계",
                  "4차 산업 기술 동향, 디자인 씽킹, 리더십 등 다양한 주제 지원",
                  "오프라인 집합 교육 및 비대면 라이브 클래스 병행 가능",
                ]}
                target="대학, 공공기관, 단체"
                schedule="협의 후 상시 진행"
              />
            }
          />
          {/* Default route */}
          <Route
            path="*"
            element={
              <div className="text-center text-slate-500 py-20 bg-white border border-slate-200">
                상단 탭을 선택하여 상세 프로그램을 확인하세요.
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
