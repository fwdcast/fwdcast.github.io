---
title: Hito 1 - Conceptualización
description: Desarrollo de un boceto de la aplicación y sus funcionalidades
---

El WP1 define el alcance inicial de FORECAST y traduce la memoria científica del proyecto en una primera propuesta de aplicación. Su objetivo es concretar qué hará la herramienta, qué datos podrá recibir, qué resultados generará y cómo se documentarán las decisiones de modelización.

<div class="forecast-update">
	<strong>Producción disponible:</strong> se publica el boceto V01 de la aplicación, fechado el 08/04/2026, como material de trabajo abierto para revisión.
	<a href="/FORECAST_boceto_V01.pdf">Descargar boceto WP1</a>
</div>

## Alcance del boceto V01

El documento describe una propuesta de interfaz organizada en cinco espacios:

| Área | Función prevista |
|------|------------------|
| Portada | Presentar el proyecto, la cita recomendada, la financiación y el acceso a carga de proyectos previos. |
| Datos | Incorporar datos individuales de pacientes o datos agregados procedentes de curvas Kaplan-Meier publicadas. |
| Extrapolación | Ajustar funciones paramétricas y modelos flexibles, comparar ajuste y revisar visualmente las extrapolaciones. |
| Informe | Generar un documento que acompañe modelos o informes y mejore la trazabilidad de las decisiones tomadas. |
| Guardar datos | Exportar resultados en Excel y en un formato JSON reutilizable por FORECAST o por herramientas futuras. |

## Decisiones funcionales iniciales

- FORECAST estará orientado a la extrapolación de curvas de Kaplan-Meier mediante modelos paramétricos.
- La herramienta aceptará datos individuales de pacientes y datos agregados extraídos de publicaciones.
- Para datos agregados, se contempla la digitalización de curvas y la conversión a pseudo datos individuales de pacientes.
- La comparación de modelos incluirá criterios de ajuste como AIC y BIC, además de evaluación visual.
- Cada endpoint podrá guardarse por separado para facilitar su uso posterior en modelos farmacoeconómicos.
- El programa será abierto y gratuito. En Windows se prevé una versión ejecutable sin necesidad de instalar R; en Linux y Mac será necesario disponer de R.

## Qué no cubre esta primera versión

FORECAST no pretende construir modelos de supervivencia particional completos en esta fase. Su función será generar y documentar extrapolaciones que puedan emplearse después en modelos convencionales o en herramientas futuras.

## Próximo paso

El boceto V01 se usará como base para el WP2, en el que se recogerán comentarios de actores interesados. La web publicará una síntesis de esas consultas cuando exista material consolidado y anonimizado.
