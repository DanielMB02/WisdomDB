import { Supplier } from 'src/supplier/entities/supplier.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customsDocumentation' })
export class CustomsDocumentation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { array: true, nullable: true })
  commercialInvoices: string[]; //Facturas comerciales

  @Column('text', { array: true, nullable: true })
  shippingDocuments: string[]; //Documentos de embarque

  @Column('text', { array: true, nullable: true })
  certificatesOrigin: string[]; //Certificados de origen

  @Column('text', { array: true, nullable: true })
  CustomsDocuments: string[]; //Documentos de aduana

  @Column('text', { array: true, nullable: true })
  importLicenses: string[]; //Licencias de importación

  @Column('text', { array: true, nullable: true })
  complianceCertificates: string[]; //Certificados de cumnplimiento normativo

  @Column('text', { array: true, nullable: true })
  inspectionQualityRecords: string[]; //Registros de inspección y calidad

  @Column('text', { array: true, nullable: true })
  transportInsuranceDocuments: string[]; //Documentos de seguro de transporte

  @Column('text', { array: true, nullable: true })
  specificRegulationNotices: string[]; //Notificaciones de regulaciones específicas

  @Column('text', { array: true, nullable: true })
  lettersAndBankDocuments: string[]; //Cartas de crédito y documentos bancarios

  @Column('text', { array: true, nullable: true })
  contractsAndCommercialAgreements: string[]; //Contratos de acuerdos comerciales
  

}