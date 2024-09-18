import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'documentacion_aduanera' })
export class CustomsDocumentation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { array: true, nullable: true })
  facturasComerciales: string[]; //Facturas comerciales

  @Column('text', { array: true, nullable: true })
  documentosDeEmbarque: string[]; //Documentos de embarque

  @Column('text', { array: true, nullable: true })
  certificadosDeOrigen: string[]; //Certificados de origen

  @Column('text', { array: true, nullable: true })
  documentosDeAduana: string[]; //Documentos de aduana

  @Column('text', { array: true, nullable: true })
  licenciasDeImportacion: string[]; //Licencias de importación

  @Column('text', { array: true, nullable: true })
  certificadosDeCumplimientoNormativo: string[]; //Certificados de cumnplimiento normativo

  @Column('text', { array: true, nullable: true })
  registrosDeInspeccionYCalidad: string[]; //Registros de inspección y calidad

  @Column('text', { array: true, nullable: true })
  documentosDeSeguroDeTransporte: string[]; //Documentos de seguro de transporte

  @Column('text', { array: true, nullable: true })
  notificacionesDeRegulacionesEspecificas: string[]; //Notificaciones de regulaciones específicas

  @Column('text', { array: true, nullable: true })
  cartasDeCreditoYDocumentosBancarios: string[]; //Cartas de crédito y documentos bancarios

  @Column('text', { array: true, nullable: true })
  contratosDeAcuerdosComerciales: string[]; //Contratos de acuerdos comerciales
  

}