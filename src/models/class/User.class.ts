class UserCurrentResponse {
  id: number;
  createDate: string;
  email: string;
  password: string;
  phone: string;
  fullName: string;
  dateOfBirth: string;
  image: string | null;
  gender: string;
  address: string;
  role: string;
  enabled: boolean;
  username: string;
  verified: boolean;
  identityCard: string;
  identityCardDateProvide: string;
  identityCardAddressProvide: string;
  authorities: { authority: string }[];
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;

  constructor(
    id: number,
    createDate: string,
    email: string,
    password: string,
    phone: string,
    fullName: string,
    dateOfBirth: string,
    image: string | null,
    gender: string,
    address: string,
    role: string,
    enabled: boolean,
    identityCard: string,
    identityCardDateProvide: string,
    identityCardAddressProvide: string,
    username: string,
    verified: boolean,
    authorities: { authority: string }[],
    credentialsNonExpired: boolean,
    accountNonExpired: boolean,
    accountNonLocked: boolean
  ) {
    this.id = id;
    this.createDate = createDate;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.fullName = fullName;
    this.dateOfBirth = dateOfBirth;
    this.image = image;
    this.gender = gender;
    this.address = address;
    this.role = role;
    this.enabled = enabled;
    this.identityCard = identityCard;
    this.identityCardAddressProvide = identityCardAddressProvide;
    this.identityCardDateProvide = identityCardDateProvide;
    this.username = username;
    this.verified = verified;
    this.authorities = authorities;
    this.credentialsNonExpired = credentialsNonExpired;
    this.accountNonExpired = accountNonExpired;
    this.accountNonLocked = accountNonLocked;
  }
}

export default UserCurrentResponse;
