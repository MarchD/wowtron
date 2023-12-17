import ButtonIcon from '../ButtonIcon';
import { BackIcon, RefreshIcon } from '../icons';
import Button from '../Button';
import { FC, memo } from 'react';

interface HeaderProps {
  onBack?: () => void;
  onRefresh?: () => void;
  onLogout?: () => void;
  accountInfo?: string;
}

const Header: FC<HeaderProps> = ({ onLogout, onBack, onRefresh, accountInfo }) => (
  <div className="flex justify-between items-center p-2 bg-white shadow-lg">
    <div>
      <ButtonIcon onClick={onBack}>
        <BackIcon/>
      </ButtonIcon>

      <ButtonIcon>
        <RefreshIcon onClick={onRefresh}/>
      </ButtonIcon>
    </div>

    <p
      className="w-full max-w-[462px] h-8 flex rounded-md items-center justify-center text-[13px] bg-grey-light">
      {accountInfo}
    </p>

    <Button color="secondary" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

export default memo(Header);