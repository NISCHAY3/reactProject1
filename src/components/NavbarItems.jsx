export default function NavbarItems({ el, active, handleChange }) {
  return (
    <li
      className={` text-[16px] leading-[24px] font-poppins cursor-pointer hover:text-secondary ${active === el.id ? "text-secondary" : "text-white/70"
        }`}
      onClick={() => handleChange(el.id)}
    >
      <a href={`#${el.id}`}>{el.title}</a>
    </li>
  );
}
