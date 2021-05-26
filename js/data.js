//list
const qnaList = [
  {
    n : '1/12',
    q: '1. 친구가 파티 초대장을 보냈다. 나의 반응은?',
    a: [
      { answer: 'a. 사람들 만날 생각에 벌써부터 드릉드릉한다.', type: ['ENTJ','ENTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESFJ', 'ESTP', 'ESFP'] },
      { answer: 'b. 아.. 꼭 가야하나? 가기싫지만 막상 가면 잘논다.', type: ['INFJ', 'INFP', 'ISFJ', 'ISFP'] },
      { answer: 'c. 안읽씹.', type: ['INTJ', 'INTP', 'ISTJ', 'ISTP' ] },
    ]
  },
  {
    n : '2/12',
    q: '2. 파티장에서 당신의 행동은? ',
    a: [
      { answer: 'a. 여러 사람들이랑 얘기하느라 바쁘다.', type: ['ENTJ','ENTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESFJ', 'ESTP', 'ESFP'] },
      { answer: 'b. 아는 애들 무리에 앉아 간간히 얘기한다.', type: ['INFJ', 'INFP', 'ISFJ', 'ISFP'] },
      { answer: 'c. 구석에 앉아 핸드폰한다.', type: ['INTJ', 'INTP', 'ISTJ', 'ISTP' ] },
    ]
  },
  {
    n : '3/12',
    q: '3. 파티가 끝난 후 당신은 무슨 생각을 하나요?',
    a: [
      { answer: 'a. 아까 친해진 애들이랑 2차갈 생각에 신났다.', type: ['ENTJ','ENTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESFJ', 'ESTP', 'ESFP'] },
      { answer: 'b. 피곤하지만 나름 재밌었다는 생각을 한다.', type: ['INFJ', 'INFP', 'ISFJ', 'ISFP'] },
      { answer: 'c. 무념으로 집에 간다.', type: ['INTJ', 'INTP', 'ISTJ', 'ISTP' ] }
    ]
  },
  {
    n : '4/12',
    q: '4. 시험이 한 달 남은 상황에서 당신의 행동은?',
    a: [
      { answer: 'a. 한 달 동안 어떻게 공부할지 꼼꼼히 계획을 세운다.', type: ['ESTJ', 'ESFJ', 'ISTJ', 'ISFJ'] },
      { answer: 'b. 계획의 틀을 짜논다.', type: ['INTJ', 'ENTJ', 'INFJ', 'ENFJ' ] },
      { answer: 'c. 별 생각 없다.', type: ['INTP', 'ENTP', 'INFP', 'ENFP', 'ISTP', 'ISFP', 'ESTP', 'ESFP'] },
    ]
  },
  {
    n : '5/12',
    q: '5. 시험이 2주 남았을 때 당신의 행동은?',
    a: [
      { answer: 'a. 세워놓은 계획을 점검하며, 하던대로 공부한다.', type: ['ESTJ', 'ESFJ', 'ISTJ', 'ISFJ'] },
      { answer: 'b. 계획 세우기를 시작한다.', type: ['INTJ', 'ENTJ', 'INFJ', 'ENFJ']},
      { answer: 'c. 대충 책 읽기를 시작한다.', type: [ 'INTP', 'ENTP', 'INFP', 'ENFP','ISTP', 'ISFP', 'ESTP', 'ESFP'] },
    ]
  },

  {
    n : '6/12',
    q: '6. 시험 하루전 당신의 마음은 어떤가요?',
    a: [
      { answer: 'a. 마지막 점검을 통해 헷갈리는 부분을 다시 체크!', type: ['ESTJ', 'ESFJ', 'ISTJ', 'ISFJ'] },
      { answer: 'b. 모르는 부분을 외우고, 시험을 위해 일찍 잠에 든다.', type: ['INTJ', 'ENTJ', 'INFJ', 'ENFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'] },
      { answer: 'c. 발등에 불떨어짐, 밤샘 시작', type: ['INTP', 'ENTP', 'INFP', 'ENFP' ] },
    ]
  },
  {
    n : '7/12',
    q: '7. 이해 안 되는 공식이 있을 때, 당신의 행동은?',
    a: [
      { answer: 'a. 공식이 괜히 공식이겠어. 걍 외우자', type: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'] },
      { answer: 'b. 나중에 선생님께 여쭤보기로하고 우선 넘긴다.', type: ['INFJ', 'INFP', 'ENFJ', 'ENFP'] },
      { answer: 'c. ??? 이해 될 때 까지 공식에 집착한다.', type: ['INTJ', 'INTP', 'ENTJ', 'ENTP'] },
    ]
  },
  {
    n : '8/12',
    q: '8. 로또를 산 당신, 어떤 상상을 하나요?',
    a: [
      { answer: 'a. 당첨되길 바랄뿐 상상같은거 안한다.', type: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] },
      { answer: 'b. 당첨되면 대출 갚고, 집사고...', type: ['ISTP', 'ISFP', 'ESTP', 'ESFP'] },
      { answer: 'c. 당첨되면 어디에 숨기지? 계좌 없는데 만들어주나? 누가 훔쳐가면 어떡하지? 되돌려 받을 수 있나? ', type: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP'] },
    ]
  },
  {
    n : '9/12',
    q: '9. 운동을 끝낸 후 거울을 보며 드는 생각은?',
    a: [
      { answer: 'a. 거울 볼 시간이 어딨어 씻고 자야지..', type: ['ISTJ', 'ISFJ', 'ISTP', 'ISFP'] },
      { answer: 'b. 열심히 한 나 자신 칭찬해^^', type: ['ESTJ', 'ESFJ', 'ESTP', 'ESFP' ] },
      { answer: 'c. 복근 생긴 상상하며 이리저리 살펴본다.', type: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP'] },
    ]
  },
  {
    n : '10/12',
    q: '10. 시험에 떨어진 당신, 가장 위로 되는 말은? ',
    a: [
      { answer: 'a. 말 없이 꼭 안아준다', type: ['ENFJ', 'ENFP', 'ESFJ', 'ESFP'] },
      { answer: 'b. 괜찮아 그 동안 많이 힘들었지, 고생했어', type: ['INFJ', 'INFP', 'ISFJ', 'ISFP'] },
      { answer: 'c. 이번 시험이 다른 유형이 나와서 더 어려웠대, 한 번 겪어봤으니까 다음번엔 합격할거야', type: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'ISTJ', 'ESTJ', 'ISTP', 'ESTP' },
    ]
  },
  {
    n : '11/12',
    q: '11. 약속 시간에 늦은 친구, 당신이 듣고 싶은 대답은? ',
    a: [
      { answer: 'a. 진짜 미안해, 많이 기다렸지 미안해ㅜ', type: ['INFP', 'ENFP', 'ISFP', 'ESFP'] },
      { answer: 'b. 미안해, 다음엔 절대 안늦을게', type: ['INFJ', 'ENFJ', 'ISFJ', 'ESFJ'] },
      { answer: 'c. 미안해, 오는 길에 사고가 나는 바람에..', type: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'ISTJ', 'ESTJ', 'ISTP', 'ESTP'] },
    ]
  },
  {
    n : '12/12',
    q: '12. 발표를 끝낸 후 가장 듣고 싶은 말은?',
    a: [
      { answer: 'a. 고생했어! 준비하느라 힘들었지 열심히 준비한게 느껴지더라 굿굿', type: ['INFP', 'ENFP', 'ISFP', 'ESFP'] },
      { answer: 'b. 고생많았어, 진짜 잘했더라 역시~!', type: ['INFJ', 'ENFJ', 'ISFJ', 'ESFJ'] },
      { answer: 'c. 와 대박 어떻게 이런 생각을 했어? 이번 발표 1등은 너다', type: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'ISTJ', 'ESTJ', 'ISTP', 'ESTP'] },
    ]
  }
]

//result
const infoList = [
  {
    title : 'INTJ : 용의주도한 전략가, 푸들',
    alt : '푸들',
    pTitle : '"멍대표 똑똑이, 푸들"',
    iconText_1 : '귀여운 외모와 달리, 가장 영리한 멍멍이',
    iconText_2 : '왕고집에 자신감 뿜뿜!',
    desc: '언제나 자신감이 넘치기 때문에 연애 상대로도 인기가 많지만, 독립적이고 자유로운 성격 탓에 상대에게 상처를 주기도 합니다. 똑똑한 야망가이자 의외의 에너지와 모험적 기질을 가지고 있는 당신! 푸들과 비슷한 면모를 가지고 있네요.'
  },
  {
    title: 'INTP : 논리적인 사색가, 페키니즈',
    alt : '페키니즈',
    pTitle : '"호기심 많은 집순이, 페키니즈"',
    iconText_1 : '풍성한 털만큼이나 호기심 가득 멍멍이',
    iconText_2 : '예민해 보여? 반전의 초 낙천적 성격! ',
    desc: '주인 외의 사람에겐 굉장히 날선 행동을 보이지만, 한 번 친해지면 자신의 모든것을 오픈합니다. 겁이 없고, 강력한 호기심과 지식을 가지고 있지만 고집이 세기 때문에 억지로 길들이기는 금물! 몸의 반이 귀찮이즘인 당신, 인간 페키니즈네요'
  },
  {
    title: 'ENTJ : 대담한 통솔자, 치와와',
    alt : '치와와',
    pTitle : '"작은 고추가 맵다, 치와와"',
    iconText_1 : '자존심 빼면 시체, 카리스마 멍멍이',
    iconText_2 : '작은 몸집에서 나오는 공격성!',
    desc: '작은 체구와 달리 매우 불같은 성격의 치와와는 고집이 무척세고 질투심이 강합니다. 자신보다 강한 상대에게도 굽히지 않으며, 호전적인 성격을 보입니다. 활동성이 높으며, 스스로 쟁취하기를 좋아하는 당신은 치와와와 비슷하네요'
  },
  {
    title: 'ENTP : 뜨거운 논쟁을 즐기는 변론가, 포메라니안',
    alt : '포메라니안',
    pTitle : '"내 말이 법이다, 포메라니안"',
    iconText_1 : '친근한 모습에 숨어있는 성격, 지배자 멍멍이',
    iconText_2 : '필살기, 애교로 주인 조종하기!',
    desc: '자신의 똑똑함을 이용해 상황을 원하는 대로 움직이는 성격을 가지고 있습니다. 사람들에게 매우 친근하게 다가가며, 애교도 넘치지만 좋고 싫음이 분명합니다. 지배적인 성격임에도 미워할 수 없는 사랑스러움을 가진 당신은 포메라니안?!'
  },
  {
    title: 'INFJ : 선의의 옹호자, 골든리트리버',
    alt : '골든리트리버',
    pTitle : '"멍대표 천사견, 골든 리트리버"',
    iconText_1 : '차분하면서도 친화적인 멍멍이',
    iconText_2 : '뛰어난 학습능력은 옵션!',
    desc: '차분한 성격과 강인함을 동시에 지니고 있습니다. 타인과 스스럼없이 어울리며, 다른 사람의 감정도 만져줄 수 있는 사람입니다. 가장 흔하지 않은, 진정한 내유외강의 성격을 가지고 있는 당신, 골든 리트리버와 비슷한 면모를 가지고 있네요'
  },
  {
    title: 'INFP : 열정적인 중재자, 허스키',
    alt : '허스키',
    pTitle : '잘생긴 외모에 숨겨진 온순함, 허스키',
    iconText_1 : '의외의 차분한 성격이 매력적인 멍멍이',
    iconText_2 : '남에게 민폐끼치는 것음 금물!',
    desc: '온순하고 차분한 성격을 가지고 있습니다. 혼자 있는 것을 좋아하지만, 다른 이들과도 어울릴 줄 아는 성격입니다. 타인에게 피해끼치지 않으려 노력하는 당신은 허스키와 매우 비슷합니다.'
  },
  {
    title: 'ENFJ : 정의로운 사회운동가, 웰시코기',
    alt : '웰시코기',
    pTitle : '쾌할함과 명랑함 그 자체, 웰시코기',
    iconText_1 : '사람에게 관심이 많은 멍멍이',
    iconText_2 : '친화적인이고 자신감 넘치는 성격!',
    desc: '타인과도 매우 친근하게 지내며, 기본적으로 사람에 대한 신뢰가 높습니다. 자신감이 넘쳐 사람들에게 먼저 다가가며 즐거움을 선사합니다. 언제나 열정 가득한 그대는 인간 웰시코기네요'
  },
  {
    title: 'ENFP : 재기발랄한 활동가, 비글',
    alt : '비글',
    pTitle : '자유로운 사고의 소유자, 비글',
    iconText_1 : '낯선사람도 반갑게 맞는 멍멍이',
    iconText_2 : '자유와 에너지의 대명사!',
    desc: '넘치는 에너지를 뽐내고 다니는 성격을 지녔습니다. 매우 활발하며, 매사에 열정이 넘칩니다. 또 한편으로는 자유를 갈망하기도 합니다. 장난과 자유를 사랑하는 당신은 비글이라고 볼 수 있습니다.'
  },
  {
    title: 'ISTJ : 청렴결백한 논리주의자, 삽살개',
    alt : '삽살개',
    pTitle : '강렬한 눈빛의 소유자, 삽살개',
    iconText_1 : '충직함과 책임감이 강한 멍멍이',
    iconText_2 : '조용하면서도 단호한 성격의 소유자!',
    desc: '충직과 책임감 빼면 시체라고 볼 수 있습니다. 삽살개가 주인에게 책임감을 느끼듯 이 유형의 사람들은 자신이 맡은 일은 끝까지 해내려 합니다. 지킬건 지키는 철벽쟁이, 당신은 삽살개와 비슷합니다.'
  },
  {
    title: 'ISFJ : 용감한 수호자, 비숑',
    alt : '비숑',
    pTitle : '언제나 사랑이 넘치는, 비숑',
    iconText_1 : '뛰어난 관계술을 가진 멍멍이',
    iconText_2 : '사랑과 자애로움의 대명사!',
    desc: '내성적이면서도 사회적인 성향을 지닌 사람들입니다. 타인과 친밀한 관계를 유지하면서 그들을 만족시키기 위해 노력합니다. 하지만, 독립적인 성격도 함께 지니고 있습니다. 누구에게나 다정한 당신은, 비숑이 아닌가요?'
  },
  {
    title: 'ESTJ : 엄격한 관리자, 진돗개',
    alt : '진돗개',
    pTitle : '우리나라 전통개의 위엄, 진돗개',
    iconText_1 : '용맹함의 상징, 사냥하는 멍멍이',
    iconText_2 : '영리함과 뛰어난 상황 판단의 소유자!',
    desc: '누구에게도 지지 않는 용맹함과 그를 뒷받침하는 영리함을 지니고 있습니다. 유혹에 쉽게 넘어가지 않으며, 뛰어난 상황판단력을 지니고 있습니다. 추진력과 이에 맞는 책임감을 지니고 있습니다. 똑부러지는 당신은, 진돗개와 닮았습니다. '
  },
  {
    title: 'ESFJ : 사교적인 외교관, 시츄',
    alt : '시츄',
    pTitle : '장난과 긍정의 에너지, 시츄',
    iconText_1 : '인기쟁이 멍멍이',
    iconText_2 : '사교적인 성격의 소유자!',
    desc: '타인에게 애정이 넘치며, 장난기가 많은 성격입니다. 외향적이면서 밝은 성격으로 조화로운 인간관계를 유지하고 있습니다. 충돌을 싫어하며, 모임과 만남을 좋아합니다. 타인에게 쉽게 상처받는 성격이기도 합니다. 친화적인 당신은 인간 시츄네요 '
  },
  {
    title: 'ISTP : 만능 재주꾼, 차우차우',
    alt : '차우차우',
    pTitle : '독립적인 똑똑이, 차우차우',
    iconText_1 : '냉담하고, 냉철한 멍멍이',
    iconText_2 : '낯선사람은 싫어!',
    desc: '냉담하고 냉철하게 타인과 사회를 바라보는 성격입니다. 독립적인 성향이 강하며, 영민하기 때문에 어떤 일이든 중간 이상은 합니다. 이성주의적이며, 자신들이 생각하는 선을 넘지만 않으면 크게 상관하지 않습니다. 냉철한 이성주의자인 당신은 차우차우와 닮았습니다.'
  },
  {
    title: 'ISFP : 호기심 많은 예술가, 사모예드',
    alt : '사모예드',
    pTitle : '나긋나긋 수줍음많은, 사모예드 ',
    iconText_1 : '외모처럼 부드러운 성격의 멍멍이',
    iconText_2 : '친밀하면서 따뜻한 성격의 소유자!',
    desc: '수줍움이 많으면서도 친밀감을 잘 형성하는 성격입니다. 나긋나긋하며 부드러운 이들은 타인에게 배려심 넘치기도 합니다. 작은 일에도 행복함을 느끼며, 규칙과 제약을 싫어합니다. 배려심 넘치는 마음을 가진 당신은 사모예드가 아닌가요? '
  },
  {
    title: 'ESTP : 모험을 즐기는 사업가, 말티즈',
    alt : '말티즈',
    pTitle : '귀여운 응석꾸러기, 말티즈',
    iconText_1 : '타인의 시선따위 상관않는 멍멍이',
    iconText_2 : '눈치빠른 야무진 성격의 소유자!',
    desc: '놀기를 좋아하며, 과감한 스릴을 좋아하는 성격입니다. 노는 것에 항상 적극적이며, 생각보다 행동이 앞서기도 합니다. 자존심이 강하며, 어쩔땐 고집 센 면모를 보이기도 합니다. 내가 제일 잘나간다는 마인드! 말티즈와 똑같습니다.'
  },
  {
    title: 'ESFP : 자유로운 영혼의 연예인, 퍼그',
    alt : '퍼그',
    pTitle : '천방지축 매력쟁이, 퍼그',
    iconText_1 : '헐렁한 모습이 매력적인 멍멍이',
    iconText_2 : '노는게 제일 조아~!',
    desc: '다소 헐렁한 모습과 장난끼 넘치는 행동이 매력적으로 보이는 사람들입니다. 애정이 넘치면서도 때론 고집스러운 면모도 보입니다. 주목받는 것을 좋아하며 단순한 하게 생각하는 것을 좋아합니다. 쿠크다스 멘탈의 매력쟁이 당신은 인간 퍼그라 할 수 있습니다.'
  },
]