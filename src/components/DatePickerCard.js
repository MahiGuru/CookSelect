import * as React from 'react';
import DatePicker from 'react-native-date-picker'
import {View} from 'react-native'; 
import { 
  Card, 
  Subheading
} from 'react-native-paper';

const DatePickerCard = () => {
  const [date, setDate] = React.useState(new Date())
  
  return (
    <View>
      <Card style={{marginTop: 100}}>
        <Card.Content> 
          <Subheading>When should your personal Cook arrive?</Subheading>
          <DatePicker
              date={date}
              onDateChange={setDate}
            />
        </Card.Content> 
      </Card>
    </View>
  );
};

export default DatePickerCard;
