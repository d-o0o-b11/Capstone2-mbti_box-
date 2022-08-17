# 현재 유행하는 mbti를 소재로 사용한 반응형 웹사이트


## 기술 스택
> 프론트앤드 : React
> 
> 백앤드 : Spring boot

<br/>

## 주제 선정
> 성격 유형 검사가 현재 유행을 하고있으며 mbti로 부터 파생되어 다양한 성격 유형 검사가 늘어나고 있다.
> 이에 맞춰 프로젝트 핵심 주제로 mbti를 사용하고자 하였다.

<br/>

## 주요 기능
> 1️⃣ 먼저 <span style="color: blueviolet">로그인 / 비로그인 회원자</span> 들이 사용할 수 있는 기능을 크게 분류하였다.
> > 1. 로그인 회원자
> > - 회원가입 시 선택한 본인 mbti게시글에만 글을 작성할 수 있도록 제한
> > (그 외의 mbti게시판에는 읽기, 댓글 작성만 가능)
> > - 본인이 작성한 글, 댓글들은 삭제, 수정 가능
>
> > 2. 비로그인 회원자
> > - 오직 읽기 전용 ( 게시글 작성, 댓글 작성 불가 )


> 2️⃣ 두번째론 멀티게임이 구현되어있으며 이는 컴퓨터로 접속한 사람들만 사용가능하도록 다른 기기로 ( 스마트폰, 테블릿 PC 등 ) 접속한 사람들은 이용하지 못하도록 제한
> ( 멀티게임은 '유니티'엔진을 이용하여 컴퓨터를 기준으로 코드 구현하였기 때문에 그외의 기기들은 지원하지 못하기 때문에 제한을 두었다.)

> 3️⃣ 마지막으로, 채팅 기능이 구현되어 있으며 이는 로그인 회원자들만 사용 가능 하다.
> > 채팅 기능은 "소켓"으로 구현하였으며 백앤드 측에서 spring boot 업그레이드로 인해 코드 변경 사항으로 수정 중이다.
> > (업그레이드 전에는 채팅 기능을 사용할 수 있었다.)

<br/><br/><br/>

## 스마트폰 사이즈
<img src="https://user-images.githubusercontent.com/97296843/185094693-21f01f41-a3cc-48b7-9195-0d7ca0e6eeb7.gif">

