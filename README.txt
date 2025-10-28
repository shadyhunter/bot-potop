# Эксперты по затоплению — статический лендинг с ChatKit

Этот пакет — готовый к деплою на Vercel/любой хостинг.

## Что внутри
- `index.html` — единый файл со стилями и блоком чата.
- Встроенный ChatKit-компонент `<openai-chatkit>` с workflow-id: `wf_68fc024308608190a73c4a3010d0ae9c0473908472fa1005` (версия `draft`).

## Деплой на Vercel (без Git)
1. Зайдите на https://vercel.com → New Project → Import Project → Manual Deploy.
2. Перетащите архив .zip.
3. Framework: **Other**, Output directory: оставить пустым.
4. Нажмите Deploy, получите домен вида `https://…vercel.app`.

## Обязательно в ChatKit
В ChatKit Quickstart добавьте домен сайта в **Allowed domains** (например, `https://имя.vercel.app`).

## Кастомизация
- Заменить заголовок «Эксперты по затоплению».
- Изменить список преимуществ.
- Поменять `version` на `production`, когда будете готовы.
