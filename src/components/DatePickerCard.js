import * as React from 'react';
import DatePicker from 'react-native-date-picker'
import {View} from 'react-native'; 

import { 
  Card, 
  Subheading,
  Headline
} from 'react-native-paper';

const DatePickerCard = ({onAction}) => {
  const [date, setDate] = React.useState(new Date())
  
  return (
    <View  style={{marginTop: 20}}>
     <Headline  style={{color: '#915d9e' }}>When should your personal Cook arrive?</Headline> 
      <Card>
        <Card.Content>  
          <DatePicker
              mode="datetime"
              date={date}
              onDateChange={(val) => {  
                onAction(new Date(val));
              }}
            />
        </Card.Content> 
      </Card>
    </View>
  );
};

export default DatePickerCard;
