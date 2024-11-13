const SectionTitle = ({ title, slogan }) => {
  return (
    <div className="text-center">
      <p className="text-sm text-tertiary">{slogan}</p>
      <h1 className="text-4xl font-volkhov mt-3">{title}</h1>
    </div>
  );
};

export default SectionTitle;
