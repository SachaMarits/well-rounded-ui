interface TitleProps {
  text: string;
  nok?: boolean;
}

export default function Title({ text, nok = false }: TitleProps) {
  return (
    <p>
      {text} <i className={`mdi ${nok ? "mdi-close text-danger" : "mdi-check text-success"}`} />
    </p>
  );
}
