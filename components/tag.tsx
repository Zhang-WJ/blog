const Tag = (props:{label: string}) => {
  return (
      <div class="bg-gray-200 text-green-500 rounded-sm	border-gray-200	px-2">
        {props.label}
      </div>
  );
}

export default Tag;
