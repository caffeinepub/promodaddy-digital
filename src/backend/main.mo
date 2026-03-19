import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import List "mo:core/List";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Authorization system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Service Type
  public type Service = {
    id : Nat;
    name : Text;
    description : Text;
    icon : Text;
    category : Text;
  };

  // Site Stat Type
  public type SiteStat = {
    id : Nat;
    textLabel : Text;
    value : Text;
  };

  // Contact Submission Type
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    serviceInterest : Text;
  };

  module ContactSubmission {
    public func compareByName(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  // Storage
  let services = Map.empty<Nat, Service>();
  let stats = Map.empty<Nat, SiteStat>();
  let submissions = Map.empty<Nat, ContactSubmission>();

  var nextServiceId = 1;
  var nextStatId = 1;
  var nextSubmissionId = 1;

  // Services
  public query ({ caller }) func getAllServices() : async [Service] {
    let servicesArray = services.toArray();
    servicesArray.map(func((_, service)) { service });
  };

  public shared ({ caller }) func addService(name : Text, description : Text, icon : Text, category : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can add services");
    };

    let service : Service = {
      id = nextServiceId;
      name;
      description;
      icon;
      category;
    };

    services.add(nextServiceId, service);
    nextServiceId += 1;
  };

  public shared ({ caller }) func updateService(id : Nat, name : Text, description : Text, icon : Text, category : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can update services");
    };

    let service : Service = {
      id;
      name;
      description;
      icon;
      category;
    };

    services.add(id, service);
  };

  // Stats
  public query ({ caller }) func getAllStats() : async [SiteStat] {
    let statsArray = stats.toArray();
    statsArray.map(func((_, stat)) { stat });
  };

  public shared ({ caller }) func addStat(textLabel : Text, value : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can add stats");
    };

    let stat : SiteStat = {
      id = nextStatId;
      textLabel;
      value;
    };

    stats.add(nextStatId, stat);
    nextStatId += 1;
  };

  public shared ({ caller }) func updateStat(id : Nat, textLabel : Text, value : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can update stats");
    };

    let stat : SiteStat = {
      id;
      textLabel;
      value;
    };

    stats.add(id, stat);
  };

  // Contact Form
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text, serviceInterest : Text) : async () {
    let submission : ContactSubmission = {
      id = nextSubmissionId;
      name;
      email;
      phone;
      message;
      serviceInterest;
    };

    submissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can view submissions");
    };

    let submissionsArray = submissions.values().toArray();
    submissionsArray.sort(ContactSubmission.compareByName); // Sort by name as an example
  };
};
