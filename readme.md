# Проект "To-do list"

- [x] Создать основу для создания проекта
- [ ] Создать [personal access token](#создание-personal-access-token) для загрузки файлов на github через консоль
- [ ] Изучить [документацию](https://docs.github.com/ru/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) по работе с `markdown` файлами
- [ ] Необходимо данный`markdown`файл преобразовать, используя только что полученные знания (по желанию наполнить его картинками, ссылками и всем-всем), писать [тут](#домашнюю-выполнять-тут-pointdown)
- [ ] :point_left: Проставить галочки выполненных пунктов
- [ ] Создать `commit`:
   ```
    git commit -m 'Homework 0: Изучена документация и изменён readme.md файл'
    ```
- [ ] Сделать `push` всех изменений в GitHub:
   ```
  git push
  ```
- [ ] Проверить изменения в GitHub
- [ ] Отписать мне, когда закончишь с этим заданием
> Если что-то будет не понятно, пиши!

## Создание `personal access token`:
1. Пошагово выполняем всё по [инструкции](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic) до пункта №9, где нужно указать дату жизни токена `Expiration`, выбирай вариант `No expiration`
2. Копируем полученный токен и сохраняем его где-нибудь, чтобы не потерять
3. Далее нужно заново склонировать репозиторий, чтобы подтянулись все изменения
    ```
    git clone https://github.com/Vladik56732/The-best-to-do-list-ever.git
    Username: <твоя почта>
    Password: <токен, который ты копировал>
    ```
4. Далее удалить старую папку и продолжить работать в только что склонированной

## Домашнюю выполнять тут :point_down: