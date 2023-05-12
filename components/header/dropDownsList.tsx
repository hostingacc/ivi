import {Box} from '@mui/material';
import ProfileDropDownContent from './dropdownContent/profileDropDownContent';
import FilmsDropDownContent from './dropdownContent/filmsDropDownContent';
import SubscribeDropdownContent from './dropdownContent/subscribeDropdownContent';
import DropDown from '../features/dropDown';
import { dropdownStore } from '@/store/DropdownStore';
import { observer } from 'mobx-react-lite';
import AlertDropdownContent from './dropdownContent/AlertDropdownContent';

const DropDownsList = observer(() => {
    return(
        <Box sx={{ position: 'absolute', width:'100%',top: 0, zIndex: 1}}>
            <DropDown
                content={<ProfileDropDownContent/>}
                isOpen={dropdownStore.dropdowns.profile}
                setIsOpen={(value) => dropdownStore.setShowDropdown('profile', value)}
                onMouseLeave={true}
                name={'profile'}
            />
            <DropDown
                content={<FilmsDropDownContent/>}
                isOpen={dropdownStore.dropdowns.films}
                setIsOpen={(value) => dropdownStore.setShowDropdown('films', value)}
                onMouseLeave={true}
                name={'films'}
            />
            <DropDown
                content={<SubscribeDropdownContent/>}
                isOpen={dropdownStore.dropdowns.subscribe}
                setIsOpen={(value) => dropdownStore.setShowDropdown('subscribe', value)}
                onMouseLeave={true}
                name={'subscribe'}
                height={'40rem'}
            />
            <DropDown
                content={<AlertDropdownContent/>}
                isOpen={dropdownStore.dropdowns.alert}
                setIsOpen={(value) => dropdownStore.setShowDropdown('alert', value)}
                onMouseLeave={true}
                name={'alert'}
            />
      </Box>
    )
});

export default DropDownsList;