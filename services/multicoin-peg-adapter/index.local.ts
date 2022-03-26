import app from './';

app.listen(6081, () => {
  console.log(
    `External multicoin PEG adapter initialized at http://localhost:${6081}`
  );
});
