import { createComponent } from "./create-component"

export const TextAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M168.471 161H161.49L177.175 117.412H184.773L200.459 161H193.478L181.155 125.33H180.815L168.471 161ZM169.641 143.931H192.286V149.465H169.641V143.931ZM219.422 173.94C216.826 173.94 214.591 173.6 212.718 172.919C210.859 172.237 209.341 171.336 208.164 170.216C206.986 169.095 206.106 167.867 205.524 166.534L210.994 164.278C211.377 164.902 211.888 165.562 212.527 166.257C213.179 166.966 214.059 167.569 215.166 168.066C216.287 168.563 217.727 168.811 219.486 168.811C221.898 168.811 223.892 168.222 225.467 167.044C227.042 165.881 227.829 164.022 227.829 161.468V155.041H227.425C227.042 155.736 226.488 156.509 225.765 157.361C225.055 158.212 224.076 158.95 222.828 159.574C221.579 160.198 219.954 160.51 217.954 160.51C215.371 160.51 213.044 159.907 210.973 158.701C208.916 157.481 207.284 155.686 206.078 153.317C204.886 150.933 204.29 148.003 204.29 144.527C204.29 141.051 204.879 138.071 206.057 135.588C207.248 133.105 208.88 131.204 210.952 129.884C213.023 128.55 215.371 127.884 217.996 127.884C220.025 127.884 221.664 128.224 222.913 128.905C224.161 129.572 225.133 130.352 225.829 131.246C226.538 132.14 227.084 132.928 227.467 133.609H227.936V128.309H234.171V161.724C234.171 164.533 233.519 166.839 232.213 168.641C230.908 170.443 229.142 171.776 226.914 172.642C224.701 173.507 222.203 173.94 219.422 173.94ZM219.358 155.232C221.189 155.232 222.735 154.807 223.998 153.955C225.275 153.09 226.24 151.855 226.893 150.252C227.56 148.635 227.893 146.698 227.893 144.442C227.893 142.243 227.567 140.306 226.914 138.632C226.261 136.957 225.304 135.652 224.041 134.715C222.778 133.765 221.217 133.289 219.358 133.289C217.443 133.289 215.847 133.786 214.57 134.779C213.293 135.758 212.328 137.092 211.675 138.78C211.037 140.469 210.718 142.356 210.718 144.442C210.718 146.584 211.044 148.464 211.697 150.082C212.349 151.699 213.314 152.962 214.591 153.87C215.882 154.778 217.471 155.232 219.358 155.232Z"
        fill={palette[3]}
      />
    </svg>
  )
})