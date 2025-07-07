#### React Домашнее задание 17

Приложение с переключением тем с использованием Material UI и Emotion

1. Создание нового проекта React

Откройте терминал и создайте новое React-приложение:

npx create-react-app theme-toggle-app

Перейдите в директорию проекта:

cd theme-toggle-app

2. Установка необходимых зависимостей

Установите Material UI и Emotion:

npm install @mui/material @emotion/react @emotion/styled

3. Создание темы

Откройте файл \`App.js\` в вашем текстовом редакторе.

Импортируйте необходимые модули из Material UI для создания и предоставления темы:

\`ThemeProvider\` для предоставления темы всему приложению.

\`createTheme\` для создания кастомной темы.

\`CssBaseline\` для нормализации базовых стилей по умолчанию.

Создайте светлую и тёмную темы:

Определите палитру цветов для светлой темы.

Определите палитру цветов для тёмной темы.

4. Стилизация компонентов с помощью Emotion

Импортируйте \`styled\` из Emotion.

Создайте стилизованную кнопку:

Определите стили для кнопки, такие как цвет фона, цвет текста, радиус границы и состояние при наведении.

Используйте тему для получения цветов.

5. Создание функциональности для переключения темы

Создайте функциональный компонент \`App\`.

Используйте состояние (\`useState\`) для отслеживания текущего режима темы (светлый или тёмный).

Создайте функцию для переключения между светлой и тёмной темой.

6. Рендеринг компонентов

Оберните основной контент приложения в компонент \`ThemeProvider\`, передав ему текущую тему.

Включите компонент \`CssBaseline\` для нормализации базовых стилей.

Добавьте заголовок (\`Typography\`), который будет изменять текст в зависимости от текущей темы.

Добавьте стилизованную кнопку, которая будет изменять тему при нажатии.

7. Запуск приложения

Запустите приложение командой:

npm start

![](https://lh7-eu.googleusercontent.com/docsz/AD_4nXdmFQLEMnu5rNiLzy6KLuq3IFTRKp0-FIc-UK6inOo8iZy0S7tgOXX2uhxLv1ao7rNQwejfB2VcsuWrCNXkQLpqdjFs07r0Iku_NxS6obuOwm7kekIZpgmefwCC7EzOsq40jWa-OuEjH8OtTERP07EZTL2g?key=abMluo7onBRyvsllm7TsCQ)![](https://lh7-eu.googleusercontent.com/docsz/AD_4nXeHEGOQWyShKnimbj_2mOmrWR3Xm4bWLXL-wn_yKFSqchpHrFLm3OUe-OCwyxcWgQeNxyniu8uf8tUkIDYQ1xmjWyvByR5d7lQygHgvLjLdYnvE19A8vMPIyyP_BpAFfVwhp8Et6DJyTxIlpAiUUeqPkCbc?key=abMluo7onBRyvsllm7TsCQ)
