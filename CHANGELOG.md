# CHANGELOG

История изменений сайта kurortrum1, восстановленная из истории git-репозитория (`git log`) на 2026-09-04. Это единственный источник, который не зависит от отдельных чат-сессий и не исчезает при истечении контейнера конкретной сессии.

**Как читать эту историю и её ограничения:**
- Автор — это имя/email из локальной настройки git у того, кто делал коммит (`git config user.name/user.email`), а не обязательно юридическое имя человека. Значения взяты как есть.
- Там, где сообщение коммита не описывает суть правки (частые generic-сообщения вроде «Update page.tsx», «Update fmt.Println message from 'Hello' to 'Goodbye'» — судя по всему, автосообщения из инструмента, которым правили код), указаны только проверяемые факты: какой файл менялся и объём изменений (+вставлено / −удалено строк). Построчный смысл этих правок не восстанавливался — если он нужен, надо смотреть конкретный diff по хэшу коммита.
- Pull request'ов в репозитории нет — все записи ниже это прямые коммиты в ветки (проверено через GitHub API, `list_pull_requests` вернул пустой список на 2026-09-04).
- Ссылки ведут на конкретный коммит в GitHub — по ним можно проверить содержимое.

---

## 2026-09-05

- **03:34 +11:00** — [`c6c45ba`](https://github.com/KeemPier/kurortrum1/commit/c6c45ba5f7121807fed28b0eb9a77116ff4ba758) — автор `KeemPier`
  Сообщение коммита: «Update page.tsx». Изменён `app/catalog/page.tsx` (+360 / −6 строк).

- **02:55 +11:00** — [`63230d7`](https://github.com/KeemPier/kurortrum1/commit/63230d7143768894fb651df231dc83c1d5302eae) — автор `KeemPier`
  Сообщение коммита: «Update page.tsx». Изменён `app/property/[id]/page.tsx` (+171 / −27 строк).

## 2026-08-11

- **03:37 +11:00** — [`14b2ede`](https://github.com/KeemPier/kurortrum1/commit/14b2edefbd69db6a307444983cc66752f6fdf512) — автор `Ляйсан`
  «Единая шапка/подвал, мобильная адаптация, SEO, новые страницы кабинета, юр. документы» — крупная комплексная правка, 19 файлов (+1941 / −642 строк). Согласно тексту коммита:
  - единая шапка/подвал на property/[id], for-owners, dashboard, dashboard/leads, dashboard/properties, admin;
  - кнопка «Выход» вызывает `supabase.auth.signOut()`;
  - исправлен горизонтальный скролл всего сайта на мобильных (375px), возникавший из-за шапки;
  - адаптивные сетки на dashboard/leads, dashboard/properties, admin;
  - SEO: `metadata` на catalog/for-owners, `generateMetadata` на property/[id] (страница разбита на server+client компоненты — добавлены `app/catalog/CatalogClient.tsx` и `app/property/[id]/PropertyClient.tsx`), `public/robots.txt`, `app/sitemap.ts`;
  - новые страницы: `dashboard/stats`, `dashboard/subscription`, `dashboard/documents`;
  - юридические документы: `legal/offer`, `legal/privacy`, `legal/terms` (реквизиты — плейсхолдеры, не заполнены реальными данными);
  - обязательный чекбокс согласия на регистрации;
  - восстановлена цветовая палитра бренда (#2BAE8E / #0F4C5C) на dashboard/leads, dashboard/properties, admin.

## 2026-07-14

- **14:41 +03:00** — [`5307bfe`](https://github.com/KeemPier/kurortrum1/commit/5307bfe1fa26bbba8d1a71514b21aa7623ad9592) — `bichnguyet4592-a11y`
  «Update page.tsx». `app/auth/register/page.tsx` (+108 / −60).
- **14:35 +03:00** — [`2f1d0df`](https://github.com/KeemPier/kurortrum1/commit/2f1d0df01441578b35e033f12108bbded6d490f6) — `bichnguyet4592-a11y`
  «Update page.tsx». `app/auth/login/page.tsx` (+71 / −37).
- **13:03 +03:00** — [`32b3835`](https://github.com/KeemPier/kurortrum1/commit/32b3835eb400f9764cb5e1a4a2641486f23ee756) — `bichnguyet4592-a11y`
  «Update print statement from 'Hello' to 'Goodbye'». `app/catalog/page.tsx` (+1 / −1).
- **12:57 +03:00** — [`be8a37b`](https://github.com/KeemPier/kurortrum1/commit/be8a37b7988b6f4023afccf0e6c2c94d978927b1) — `bichnguyet4592-a11y`
  «Create .npmrc» — добавлен файл `.npmrc` (+1 строка).

## 2026-07-13

- **23:39 +03:00** — [`0e8c2cd`](https://github.com/KeemPier/kurortrum1/commit/0e8c2cd3f8190af3b3a12c2dafb74753113bed5e) — `bichnguyet4592-a11y`
  «Update page.tsx». `app/for-owners/page.tsx` (+15 / −15).
- **23:32 +03:00** — [`60be20c`](https://github.com/KeemPier/kurortrum1/commit/60be20cd8a2dcbbd499e95df1be156e252c9e6d9) — `bichnguyet4592-a11y`
  «Refactor RegisterPage component with Supabase integration». `app/auth/register/page.tsx` (+10 / −10).

## 2026-06-18

- **15:23 +03:00** — [`5b88428`](https://github.com/KeemPier/kurortrum1/commit/5b88428f92b9493e29aabeff1bf5ad9a36f759fc) — `bichnguyet4592-a11y`
  «Update fmt.Println message from 'Hello' to 'Goodbye'». `app/catalog/page.tsx` (+34 / −11).
- **15:09 +03:00** — [`83e2132`](https://github.com/KeemPier/kurortrum1/commit/83e2132e8e23eb3a7d091a5c908a95cf61187b3c) — `bichnguyet4592-a11y`
  «Fix formatting in page.tsx». `app/property/[id]/page.tsx` (+1).
- **14:29 +03:00** — [`1633638`](https://github.com/KeemPier/kurortrum1/commit/1633638a409f059683e79517da766fd3ee5440db) — `bichnguyet4592-a11y`
  «Update page.tsx». `app/property/[id]/page.tsx` (+1).

## 2026-06-17

- **16:35 +03:00** — [`8e7f2ef`](https://github.com/KeemPier/kurortrum1/commit/8e7f2ef2116e9177db76917dc1f8daea2ceca668) — «Update fmt.Println message from 'Hello' to 'Goodbye'». `app/catalog/page.tsx` (+30 / −25).
- **16:31 +03:00** — [`6a4a07d`](https://github.com/KeemPier/kurortrum1/commit/6a4a07dfd3ed0290352f4b4c7078d2545eb64a6d) — «Update print statement from 'Hello' to 'Goodbye'». `app/catalog/page.tsx` (+54 / −16).
- **16:24 +03:00** — [`2d009c6`](https://github.com/KeemPier/kurortrum1/commit/2d009c648ffdd641001ee90d786251b2c41c34f2) — «Update page.tsx». `app/catalog/page.tsx` (+190 / −144).
- **16:16 +03:00** — [`914790e`](https://github.com/KeemPier/kurortrum1/commit/914790ea64d922ffcab68ddf0441789054e12545) — «Update page.tsx». `app/dashboard/properties/page.tsx` (+271 / −80).
- **15:30 +03:00** — [`4f4b53e`](https://github.com/KeemPier/kurortrum1/commit/4f4b53e3097cb9922c2815d5d582e5374727f469) — «Update fmt.Println message from 'Hello' to 'Goodbye'». `app/catalog/page.tsx` (+2 / −2).
- **15:24 +03:00** — [`5b62ee0`](https://github.com/KeemPier/kurortrum1/commit/5b62ee02e154a45b81e69d68d04426bcfefd6c4c) — «Update page.tsx». `app/catalog/page.tsx` (+143 / −75).
- **15:16 +03:00** — [`ec83e04`](https://github.com/KeemPier/kurortrum1/commit/ec83e04de90b6360561e0c2d25b21799413a95f4) — «Update page.tsx». `app/catalog/page.tsx` (+115 / −53).
- **15:08 +03:00** — [`6b68e3e`](https://github.com/KeemPier/kurortrum1/commit/6b68e3ee041ecbf0a392dbec13900df0871a8a04) — «Update page.tsx». `app/page.tsx` (+2 / −2).
- **15:04 +03:00** — [`2cb01b0`](https://github.com/KeemPier/kurortrum1/commit/2cb01b0a433327a4df5bded2c1fc09e0bc5ac361) — «Update fmt.Println message from 'Hello' to 'Goodbye'». `app/page.tsx` (+11 / −2).
- **14:58 +03:00** — [`37aa98e`](https://github.com/KeemPier/kurortrum1/commit/37aa98e036aeae8002a36063db9330ff4634a268) — «Update page.tsx». `app/page.tsx` (+3 / −6).
- **14:55 +03:00** — [`2d6b675`](https://github.com/KeemPier/kurortrum1/commit/2d6b6752e097a04a4643f33311a4fc309895ac3b) — «Add files via upload» — добавлен `public/logo.svg` (+8).
- **14:30 +03:00** — [`094f2e8`](https://github.com/KeemPier/kurortrum1/commit/094f2e8ca3efbf59c2826855adbcf6dd26cae774) — «Update page.tsx». `app/page.tsx` (+5 / −6).
- **14:16 +03:00** — [`1023afa`](https://github.com/KeemPier/kurortrum1/commit/1023afa6d3b93f438f30bd2880ee0db47f87b6ad) — «Add newline at end of layout.tsx» — без изменений содержимого (0 строк).
- **14:13 +03:00** — [`572d05f`](https://github.com/KeemPier/kurortrum1/commit/572d05f9fbeba5510f32b2d90c9a0669358b1f39) — «Add QuickSelect component for housing selection» — добавлен `app/QuickSelect.tsx` (+206).
- **14:12 +03:00** — [`ca04323`](https://github.com/KeemPier/kurortrum1/commit/ca043234a96de729f874f234dac6c0d744f5bad7) — «Integrate QuickSelect component and clean up styles». `app/layout.tsx` (+2 / −250).
- **14:08 +03:00** — [`d7d05f2`](https://github.com/KeemPier/kurortrum1/commit/d7d05f25ec63b31f48c17f99a1c32e722d34453f) — «Update layout.tsx». `app/layout.tsx` (+258 / −25).
- **13:29 +03:00** — [`6569423`](https://github.com/KeemPier/kurortrum1/commit/6569423e5453e422efbd653fd205f8a945f87d7d) — «Update fmt.Println message from 'Hello' to 'Goodbye'». `app/page.tsx` (+624 / −161).
- **13:17 +03:00** — [`7cef017`](https://github.com/KeemPier/kurortrum1/commit/7cef017faae8c6ea3c1f4e33f51988424f53cdf2) — «Update page.tsx». `app/page.tsx` (+1 / −1).
- **13:08 +03:00** — [`2b8e732`](https://github.com/KeemPier/kurortrum1/commit/2b8e7328b9eacedcfd3244045199a8fa80b831d1) — «Refactor HomePage component and modal functionality» — без изменений содержимого (0 строк).
- **13:06 +03:00** — [`3dd3344`](https://github.com/KeemPier/kurortrum1/commit/3dd334457c5fbc3484eb325c547db8a51197ef17) — «Update page.tsx». `app/page.tsx` (+161 / −623).

## 2026-06-16

- **17:51 +03:00** — [`089354c`](https://github.com/KeemPier/kurortrum1/commit/089354cb8fd37555740e855f942c28388fc8f1ad) — «Add files via upload» — добавлен `logo-transparent.png`.
- **17:28 +03:00** — [`90ab6c9`](https://github.com/KeemPier/kurortrum1/commit/90ab6c90cbc1a4770166f68694719ff61bd23a94) — «Update fmt.Println to print 'Goodbye World'». `app/page.tsx` (−655, удаление содержимого).
- **17:24 +03:00** — [`076f65b`](https://github.com/KeemPier/kurortrum1/commit/076f65b3954e77d94cdc5cdb4cd20e472557753d) — «Update page.tsx». `app/page.tsx` (+665).
- **17:19 +03:00** — [`737128f`](https://github.com/KeemPier/kurortrum1/commit/737128fd80987e785fb6f47511c145991aef297d) — «Update page.tsx». `app/page.tsx` (+43 / −31).
- **16:45 +03:00** — [`0d653f8`](https://github.com/KeemPier/kurortrum1/commit/0d653f8a4b391457c0fdfad102a416c276651c6d) — «Update fmt.Println message from 'Hello' to 'Goodbye'». `app/page.tsx` (+10 / −11).
- **16:36 +03:00** — [`43a4bcc`](https://github.com/KeemPier/kurortrum1/commit/43a4bccfbbe122e5712c574b804568f94248274c) — «Update fmt.Println message from 'Hello' to 'Goodbye'». `app/page.tsx` (+12 / −7).
- **16:33 +03:00** — [`7b950f7`](https://github.com/KeemPier/kurortrum1/commit/7b950f7a5a45fcbe78b1765c173cdc0554c9727f) — «Add files via upload» — добавлен `public/logo.png`.
- **16:31 +03:00** — [`ffc8d0e`](https://github.com/KeemPier/kurortrum1/commit/ffc8d0ee189ae2ec69896784e749a7ba3a4ad421) — «Delete public/logo.png.png» — удалён файл (неверное расширение `.png.png`).
- **16:20 +03:00** — [`77ed461`](https://github.com/KeemPier/kurortrum1/commit/77ed461d6a984c37301bd0a575745fce3613cb8d) — «Update page.tsx». `app/page.tsx` (+178 / −137).
- **15:51 +03:00** — [`b899574`](https://github.com/KeemPier/kurortrum1/commit/b899574f5da83a6901c434da4329a99a6ca3c349) — «Add files via upload» — добавлен `public/logo.png.png`.

## 2026-06-10

- **17:20 +03:00** — [`965ded2`](https://github.com/KeemPier/kurortrum1/commit/965ded290007afc576a31ff72cef1f764f7cdeda) — «Update page.tsx». `app/page.tsx` (+561 / −63).
- **17:10 +03:00** — [`2248c59`](https://github.com/KeemPier/kurortrum1/commit/2248c59f3134725fd0666ed8c00ece9894ae800c) — «Add files via upload» — добавлены изображения курортов: `essentuki.jpg.jpg`, `hero.jpg.webp`, `kislovodsk.jpg.webp`, `pyatigorsk.jpg.jpg`, `zheleznovodsk.jpg.jpg`.

## 2026-06-09 — старт проекта

- **20:00 +03:00** — [`011f2c9`](https://github.com/KeemPier/kurortrum1/commit/011f2c95203f8381475a6134ba726203a251e8cd) — «Update page.tsx». `app/for-owners/page.tsx` (+107 / −101).
- **19:57 +03:00** — [`aff8d3f`](https://github.com/KeemPier/kurortrum1/commit/aff8d3fc025f753422ca7480ec1f34b75b4fa33a) — «Update page.tsx». `app/property/[id]/page.tsx` (+32 / −7).
- **19:53 +03:00** — [`ee74759`](https://github.com/KeemPier/kurortrum1/commit/ee747599c365cd6dbdbc0ab77efc8a68d9be4fa4) — «Update page.tsx». `app/catalog/page.tsx` (+21 / −15).
- **19:49 +03:00** — [`cc9260d`](https://github.com/KeemPier/kurortrum1/commit/cc9260d167e28bd33a5bf861e25235e9bf7148d2) — «Refactor HomePage component for responsiveness». `app/page.tsx` (+72 / −22).
- **17:15 +03:00** — [`4b74836`](https://github.com/KeemPier/kurortrum1/commit/4b74836f74f5102fcb3aae4332c9e1a48861ffb7) — «fix footer year». `app/page.tsx` (+1 / −1).
- **15:31 +03:00** — [`5f41229`](https://github.com/KeemPier/kurortrum1/commit/5f412299952d713c582ead6ccced980ca21c49aa) — «add admin page» — **первый коммит репозитория**: инициализация Next.js-проекта, 25 файлов (+6235 строк) — базовые страницы (`app/page.tsx`, `admin`, `auth/login`, `auth/register`, `catalog`, `dashboard`, `dashboard/leads`, `dashboard/properties`, `for-owners`, `property/[id]`), `lib/supabase.ts`, конфиги (Next.js, Tailwind, TypeScript, ESLint).

---

## Примечание об этой сессии (2026-09-04)

Прошлые сессии Claude Code по этому репозиторию не отображаются через доступный мне API (`list_sessions` возвращает только текущую сессию). Причину со стороны интерфейса claude.ai/code подтвердить не могу. Проверяемая история осталась только в git — она восстановлена выше. Дальше рекомендую пополнять этот файл при каждой значимой правке, чтобы не зависеть от сохранности сессий.
