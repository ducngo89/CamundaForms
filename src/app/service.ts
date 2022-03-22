import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

export interface ProcessDefinitionXML {
  id: string;
  bpmn20Xml: string;
}

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(protected http: HttpClient) {}
  getProcessDefinitionXML(id: string): Observable<ProcessDefinitionXML> {
    // return this.http.get<ProcessDefinitionXML>(
    //   `${this.api}/process-definition/${id}/xml`
    // );
    return of({
      id: "Process_1w5z0fy:2:51dbae78-ad5c-11eb-bbb2-0242ac110008",
      bpmn20Xml:
        '<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_1prblpk" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="4.7.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.14.0">\n  <bpmn:process id="Process_1w5z0fy" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1">\n      <bpmn:outgoing>Flow_19c9czg</bpmn:outgoing>\n    </bpmn:startEvent>\n    <bpmn:userTask id="UserSignUpTask" name="User Sign Up">\n      <bpmn:extensionElements>\n        <camunda:formData>\n          <camunda:formField id="username" label="Username" type="string">\n            <camunda:validation>\n              <camunda:constraint name="required" />\n            </camunda:validation>\n          </camunda:formField>\n          <camunda:formField id="email" label="Email Address" type="string">\n            <camunda:properties>\n              <camunda:property id="type" value="email" />\n            </camunda:properties>\n            <camunda:validation>\n              <camunda:constraint name="required" />\n            </camunda:validation>\n          </camunda:formField>\n          <camunda:formField id="password" label="Password" type="string">\n            <camunda:properties>\n              <camunda:property id="type" value="password" />\n            </camunda:properties>\n            <camunda:validation>\n              <camunda:constraint name="required" />\n            </camunda:validation>\n          </camunda:formField>\n          <camunda:formField id="gender" label="Gender" type="enum" defaultValue="Male">\n            <camunda:properties>\n              <camunda:property id="type" value="radiobutton" />\n            </camunda:properties>\n            <camunda:value id="Male" name="Male" />\n            <camunda:value id="Female" name="Female" />\n          </camunda:formField>\n          <camunda:formField id="date" label="Date" type="date">\n            <camunda:validation>\n              <camunda:constraint name="required" />\n            </camunda:validation>\n          </camunda:formField>\n          <camunda:formField id="country" label="Country" type="enum" defaultValue="UK">\n            <camunda:value id="UK" />\n            <camunda:value id="India" />\n            <camunda:value id="UAE" />\n            <camunda:value id="US" />\n          </camunda:formField>\n          <camunda:formField id="terms" label="Accept Terms" type="boolean" defaultValue="true" />\n          <camunda:formField id="button" label="Save" type="string">\n            <camunda:properties>\n              <camunda:property id="type" value="button" />\n            </camunda:properties>\n          </camunda:formField>\n        </camunda:formData>\n      </bpmn:extensionElements>\n      <bpmn:incoming>Flow_19c9czg</bpmn:incoming>\n      <bpmn:outgoing>Flow_0xhq9yi</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:sequenceFlow id="Flow_19c9czg" sourceRef="StartEvent_1" targetRef="UserSignUpTask" />\n    <bpmn:endEvent id="Event_1pkx7a6">\n      <bpmn:incoming>Flow_0xhq9yi</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="Flow_0xhq9yi" sourceRef="UserSignUpTask" targetRef="Event_1pkx7a6" />\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1w5z0fy">\n      <bpmndi:BPMNEdge id="Flow_19c9czg_di" bpmnElement="Flow_19c9czg">\n        <di:waypoint x="215" y="117" />\n        <di:waypoint x="280" y="117" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="Flow_0xhq9yi_di" bpmnElement="Flow_0xhq9yi">\n        <di:waypoint x="380" y="117" />\n        <di:waypoint x="432" y="117" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="179" y="99" width="36" height="36" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Event_1pkx7a6_di" bpmnElement="Event_1pkx7a6">\n        <dc:Bounds x="432" y="99" width="36" height="36" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="UserSignUpTask_di" bpmnElement="UserSignUpTask">\n        <dc:Bounds x="280" y="77" width="100" height="80" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>'
    });
  }
}