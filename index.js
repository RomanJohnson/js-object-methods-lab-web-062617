// code solution here
class President{
  constructor(name, politicalParty, yearsInOffice, homeState){
    this.name   = name;
    this.politicalParty  = politicalParty;
    this.yearsInOffice  = yearsInOffice;
    this.homeState = homeState;
    this.veto = () => "NO!";
    this.passBill = () => "You can do that!";
    this.doCharity = () =>"I like to help people.";
    this.conductPressInterview = () => "I am proud to be an American.";
    this.sayHi = () => `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${politicalParty}s, and was in office ${yearsInOffice}.`
  }
}
