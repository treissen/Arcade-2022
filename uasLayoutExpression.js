// need to add uas hull and coa id's after we get new agras t10
// NEED TO ADD OPTIONS FOR NO WIND VS WIND
var manhours = round((DateDiff($feature.EndTime, $Feature.StartTime, 'minutes') / 60), 3);
var rate = round(($feature.LBS / $feature.Acres), 2) + ' LBS/Ac';
var autospeed = $feature.AutoTreatmentSpeed_Ft_Sec + ' Auto, ';
var manspeed = $feature.ManualTreatmentSpeed_Ft_Sec + ' Manual';
var height = $feature.TreatmentHeight_Ft + ' feet';
var linespace = $feature.AutoFlightLineSpacing_Ft + ' feet';
var gateauto = $feature.SpreaderOpening_Auto;
var gatemanual = $feature.SpreaderOpening_Manual;
var DandT = Text(ToLocal($feature.StartTime), 'HH' + ':' + 'mm')  + ' To ' + Text(ToLocal($feature.EndTime), 'HH' + ':' + 'mm - ') + Text(ToLocal($feature.EndTime), 'ddd ' + 'MMM ' + 'D ' + ',Y ');
var flights = $feature.Flights +' Flights ';
var comments = $feature.Comments;
var Ac = round($feature.Acres, 2);
var FH = $feature.FlightHours + ' Hours';



var defaultLabel = (concatenate('RPIC = ' + $feature.RPIC, '- alt. Pilot = ' + $feature.OtherPilot, ' -VO = ' + $feature.VisualObserver,
textFormatting.Newline, 'Date and Time = ' + DandT, textformatting.newline, $feature.LBS + ' LBS of ' + $feature.Product, 
textformatting.newline, Ac + ' Acres Treated at ' + rate, 
textformatting.newline, $feature.WindSpeed_MPH + ' MPH of wind from ' + $feature.WindFrom, 
textformatting.newline, manhours + ' hours on site', 
textformatting.newline, flights + ' flights ' + FH + ' Flight Hours', 
textformatting.newline, 'Speed (FT/Sec) = ' + autospeed + manspeed, 
textformatting.newline, 'Height = ' + height, 
textformatting.newline, 'Line Spacing = ' + linespace, 
textformatting.newline, 'Gate Opening = ' + gateauto + '% Auto, ' + gatemanual + '% Manual', 
textformatting.newline, 'Comments: ' + comments));

var manuaulTreatLabel = (concatenate('RPIC = ' + $feature.RPIC, '- alt. Pilot = ' + $feature.OtherPilot, ' -VO = ' + $feature.VisualObserver,
textFormatting.Newline, 'Date and Time = ' + DandT, textformatting.newline, $feature.LBS + ' LBS of ' + $feature.Product, 
textformatting.newline, Ac + ' Acres Treated at ' + rate, 
textformatting.newline, $feature.WindSpeed_MPH + ' MPH of wind from ' + $feature.WindFrom, 
textformatting.newline, manhours + ' hours on site', 
textformatting.newline, flights + ' flights ' + FH + ' Flight Hours', 
textformatting.newline, 'Speed (FT/Sec) = ' + manspeed, 
textformatting.newline, 'Height = ' + height, 
textformatting.newline, 'Gate Opening = ' + gatemanual + '% Manual', 
textformatting.newline, 'Comments: ' + comments));

var autoTreatLabel = (concatenate('RPIC = ' + $feature.RPIC, '- alt. Pilot = ' + $feature.OtherPilot, ' -VO = ' + $feature.VisualObserver,
textFormatting.Newline, 'Date and Time = ' + DandT, textformatting.newline, $feature.LBS + ' LBS of ' + $feature.Product, 
textformatting.newline, Ac + ' Acres Treated at ' + rate, 
textformatting.newline, $feature.WindSpeed_MPH + ' MPH of wind from ' + $feature.WindFrom, 
textformatting.newline, manhours + ' hours on site', 
textformatting.newline, flights + ' flights ' + FH + ' Flight Hours', 
textformatting.newline, 'Speed (FT/Sec) = ' + autospeed, 
textformatting.newline, 'Height = ' + height, 
textformatting.newline, 'Line Spacing = ' + linespace, 
textformatting.newline, 'Gate Opening = ' + gateauto + '% Auto', 
textformatting.newline, 'Comments: ' + comments));

When(isEmpty($feature.AutoTreatmentSpeed_Ft_Sec), manuaulTreatLabel, 
isEmpty($feature.ManualTreatmentSpeed_Ft_Sec), autoTreatLabel, 
defaultLabel);


/// old script below for reference
// var manhours = round((DateDiff($feature.EndTime, $Feature.StartTime, 'minutes') / 60), 3);
// var rate = round(($feature.LBS / $feature.Acres), 2) + ' LBS/Ac';
// var autospeed = $feature.AutoTreatmentSpeed_Ft_Sec + ' Auto, ';
// var manspeed = $feature.ManualTreatmentSpeed_Ft_Sec + ' Manual';
// var height = $feature.TreatmentHeight_Ft + ' feet';
// var linespace = $feature.AutoFlightLineSpacing_Ft + ' feet';
// var gateauto = $feature.SpreaderOpening_Auto + '% (Auto)';
// var gatemanual = $feature.SpreaderOpening_Manual + '% (Manual)';
// var DandT = Text(ToLocal($feature.StartTime), 'HH' + ':' + 'mm')  + ' To ' + Text(ToLocal($feature.EndTime), 'HH' + ':' + 'mm - ') + Text(ToLocal($feature.EndTime), 'ddd ' + 'MMM ' + 'D ' + ',Y ');
// var flights = $feature.Flights +' Flights ';
// var comments = $feature.Comments;
// var Ac = round($feature.Acres, 2);
// var FH = $feature.FlightHours + ' Hours';

// return (concatenate('RPIC = ' + $feature.RPIC, '- alt. Pilot = ' + $feature.OtherPilot, ' -VO = ' + $feature.VisualObserver, textFormatting.Newline, 'Date and Time = ' + DandT, textformatting.newline, $feature.LBS + ' LBS of ' + $feature.Product, textformatting.newline, Ac + ' Acres Treated at ' + rate, textformatting.newline, $feature.WindSpeed_MPH + ' MPH of wind from ' + $feature.WindFrom, textformatting.newline, ' RPIC Duty Time = ' + manhours + ' Hours', textformatting.newline, '# of Flights & Flight Hours = ' + flights + ' - ' + FH, textformatting.newline, 'Speed (FT/Sec) = ' + autospeed + manspeed, textformatting.newline, 'Height = ' + height, textformatting.newline, 'Line Spacing = ' + linespace, textformatting.newline, 'Gate Opening = ' + gateauto + ' ' + gatemanual, textformatting.newline, 'Comments: ' + comments));
