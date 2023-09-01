const Tag = (props:{label: string}) => {
  return (
      <div class="bg-stone-400 rounded-sm	border-gray-200	px-2">
        {props.label}
      </div>
  );
}

export default Tag;
